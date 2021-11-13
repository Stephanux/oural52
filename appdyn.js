var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var fs = require("fs");
var session = require('express-session');
var passport = require("passport");
var LocalStrategy = require('passport-local').Strategy;
var multer = require('multer');
var bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()

global.upload = multer({
    dest: './public/data/uploads/',
    limits: 1000,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg" || file.mimetype == "application/pdf") {
          cb(null, true);
        } else {
            cb(new Error("Le format de fichier accepté est jpg, png, jpeg, pdf."), false)     
        }
      }
});

/* Chargement du fichier de configuration générale du Framework MiniSmall */
global.config = JSON.parse(fs.readFileSync("./config_minismall.json", "utf8"));

/*chargement de la configuration JSON des actions*/
global.actions_json = JSON.parse(fs.readFileSync("./routes/config_actions.json", "utf8"));

var hbs = require('hbs');
hbs.registerPartials(__dirname + '/views/partials', function() {
    console.log('partials registered');
});

hbs.registerHelper('compare', function(lvalue, rvalue, options) {
    //console.log("####### COMPARE lvalue :", lvalue, " et rvalue: ", rvalue);
    if (arguments.length < 3)
        throw new Error("Handlerbars Helper 'compare' needs 2 parameters");
    var operator = options.hash.operator || "==";
    var operators = {
        '==': function(l, r) {
            return l == r;
        }
    }
    if (!operators[operator])
        throw new Error("'compare' doesn't know the operator " + operator);
    var result = operators[operator](lvalue, rvalue);
    if (result) {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
});

// connexion depuis mongoose
global.schemas = {};
var mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
mongoose.connect(config.mongoose.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}, function(err) {
    if (err) {
        throw err;
    } else console.log('Connected Mongoose');
});

// chargement des schémas depuis le fichier de configuration JSON dans une variable
var database_schemas = JSON.parse(fs.readFileSync("database_schema.json", 'utf8'));
// Initialisation de chaque schéma par association entre le schéma et la collection
for (modelName in database_schemas) {
    global.schemas[modelName] = mongoose.model(modelName, database_schemas[modelName].schema,
        database_schemas[modelName].collection);
}

// connexion à mariadb via Sequelize
var Sequelize = require("sequelize");

// configuration des paramètres de la connexion
global.sequelize = new Sequelize(config.sequelize.databaseName, config.sequelize.userName, config.sequelize.password, {
    host: config.sequelize.host,
    dialect: config.sequelize.dialect,
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    name: process.env.SESSION_NAME,
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false, // à mettre à true uniquement avec un site https.
        maxAge: 3600000 //1h
    } 
}));
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    global.schemas["Users"].findById(id, function(err, user) {
        done(err, user);
    });
});

passport.use(new LocalStrategy(
    function(username, password, done) {    
        
        global.schemas["Users"].findOne({
            login: username
        }, function(err, user) {
            if(user) {
                bcrypt.compare(password, user.mdp, (err, res) => {
                    console.log('password: ',res)
                    if (err) {
                        return done(err);
                    }
                    if (!res) {
                        console.log("password erroné");
                        return done(null, false, {
                            message: 'Incorrect password.'
                        });
                    } else {
                        console.log("utilisateur : ", user);
                        return done(null, user);
                    }
                })
            } else {
                return done(null, false, {
                   message: 'Incorrect username.'
                });
            }
        });
    }
));

app.post('/authenticated',
    passport.authenticate('local',
    {   
        successRedirect: '/accueil',
        failureRedirect: '/' + "?msg=Il y'a une erreur de nom d'utilisateur ou de mot de passe"
    })  
)

require('./dynamicRouter')(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;