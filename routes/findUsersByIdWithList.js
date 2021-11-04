const express = require('express');
const router = express.Router();

/* Composant générique findByIdWithList pour lire un enreg via son Id mongodb 
+ une liste d'une autre collection via la variable modelList dans config_actions.json */
router.get('/', (req, res) => {
    /**Vérification si l'utilisateur détient un droit de pouvoir voir la page*/
    if ((req.session.passport) && (req.session.passport.user != null)) {
        global.schemas[req.message.modelName].find({ _id: req.query.id })
            .then((result) => {
                console.log(result)
                /**On récupère les informations de l'utilisateur connecté */
                global.schemas[req.message.modelName].find({_id: req.session.passport.user})
                .then((user) => {
                    console.log('req.session: ',user)
                    res.render(req.message.view, {
                        title: req.message.title,
                        form_action: req.message.form_action,
                        data: result[0],
                        msg: req.query.msg,
                        user: user[0]
                    });
                })
                .catch((err) => {
                    console.log(err)
                })
            })
            .catch((err) => {
                console.log(err)
            })
    } else {
        res.redirect('/'); // affichage boîte de login si pas authentifié
    }
});

module.exports = router;