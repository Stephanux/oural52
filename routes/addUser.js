const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
const bcrypt = require('bcryptjs');

/**Ajouter un utilisateur avec hashage/salage du mot de passe */
router.route('/').post( async(req, res) => {
    /**Vérification si l'utilisateur détient un droit de pouvoir voir la page*/
    if ((req.session.passport) && (req.session.passport.user != null)) {
        /**Hashage mot de passe**/
        let pass = req.body.mdp;
        await bcrypt.hash(pass, 10)
            .then(async(hash) => {
                req.body.mdp = hash
                if (!req.body._id) req.body._id = new ObjectId();
                /**Après le hashage/salage du mot de passe on fait la requête à la base de données */
                await global.schemas[req.message.modelName].create([req.body], (err, result) => {
                    if (err) {
                        console.log('erreur :' , err);
                        res.redirect(req.message.redirect + "?msg=Il y a une erreur")
                    };
                
                    console.log('insertOne mongoose: ', result);
                    // on refait une requête pour récupérer tous les enregistrements du modelName
                    global.schemas[req.message.modelName].find({}, (err, result2) => {
                        console.log("result into deleteUser : ", result2);
                        res.redirect(req.message.redirect + "?msg=Ajout correctement effectué")
                    });          
                }); // fin de l'insert()
            })
            .catch((err) => console.log(err))
        // On doit créer via Mongoose un _id pour faire l'insertion dans la base
    } else {
        res.redirect('/');
    }
}); // fin de la gestion de la route
module.exports = router;