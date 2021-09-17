var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;

router.route('/').post((req, res) => {
    if ((req.session.passport) && (req.session.passport.user != null)) {
        // On doit créer via Mongoose un _id pour faire l'insertion dans la base
        if (!req.body._id) req.body._id = new ObjectId();
        global.schemas[req.message.modelName].create([req.body], (err, result) => {
            if (err) {
                throw err;
            }

            console.log('insertOne mongoose: ', result);
            // on refait une requête pour récupérer tous les enregs du modelName
            global.schemas[req.message.modelName].find({}, (err, result2) => {
                console.log("result into deleteUser : ", result2);
            })
            .then(() => {
                res.redirect(req.message.redirect + '?msg=Ajout correctement effectuée')
            })
            .catch((err) => {
                console.log("erreur: " + err);
                res.redirect(req.message.redirect + '?msg=Il y a eu une erreur')
            })
        }); // fin de l'insert()
    } else {
        res.redirect('/');
    }
}); // fin de la gestion de la route
module.exports = router;