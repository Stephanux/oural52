var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;

/* SET user from _id with new data for an update into mongoDB . */
router.route('/').post((req, res) => {
    if ((req.session.passport) && (req.session.passport.user != null)) {
        var params_name = req.message.params_query;
        var params_value = [];
        for (let i = 0; i < params_name.length; i++) {
            params_value.push(req.body[params_name[i]]);
        }
        console.log("params_value :", params_value);
        console.log("req.body : ", req.body);
        global.schemas[req.message.modelName].updateOne({ _id: new ObjectId(req.query.id) }, (err, result)  => {
                if (err) { throw err; }

                console.log('from updateById: ', result);
                global.schemas[req.message.modelName].find({}, (err, result) => {
                    if (err) { throw err; }
                    console.log('users: ', result);
                    res.redirect(req.message.redirect + "&msg=Modification correctement effectué");
                }); // fin du find() après update
            } // fin callback de l'update
        ); // fin de l'update()
    } else {
        res.redirect('/');  // affichage boîte de login si pas authentifié
    }
});


module.exports = router;