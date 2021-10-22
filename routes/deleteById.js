/* *********************************************************
**  Module générique pour faire un "deleteOne()" via l’_id *
** *********************************************************/
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

/* Contrôleur pour la suppression d'un utilisateur */
router.post(('/'), (req, res) => {
    /**Vérification si l'utilisateur détient un droit de pouvoir voir la page*/
    if ((req.session.passport) && (req.session.passport.user != null)) {
        /**Puis on effectue la requête à la base de données */
        global.schemas[req.message.modelName].deleteOne({ _id: new ObjectId(req.params._id) }, (err, result) => {
            if (err) {
                throw err;
            }
            /**On vérifie que la suppression c'est bien passé dans la console et on fait une redirection */
            global.schemas[req.message.modelName].find({}, (err, result2) => {
                console.log("result after deleteById : ", result2);
                res.redirect(req.message.redirect);
            });
        });
    } else {
        res.redirect('/');
    }
});
module.exports = router;