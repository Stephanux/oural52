var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    if ((req.session.passport) && (req.session.passport.user != null)) {
        global.schemas[req.message.modelName].find({}, function (err, result) {
            if (err) {
                throw err;
            }
            console.log("connexion depuis Finder : ", result);
            if (req.message.return_type == null) {
                res.render(req.message.view, {
                    title: req.message.title,
                    form_action: req.message.form_action,
                    msg: req.query.msg,
                    data: result  // Attention a renvoyer une variable avec un nom generique
                });
                //}

            } else {
                res.setHeader('content-type', 'application/json');
                res.send(result);
            }
        });
    } else {
        res.redirect('/');  // affichage boîte de login si pas authentifié
    }
});

module.exports = router;