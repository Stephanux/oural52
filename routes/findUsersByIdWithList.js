const express = require('express');
const router = express.Router();

/* Composant générique findByIdWithList pour lire un enreg via son Id mongodb 
+ une liste d'une autre collection via la variable modelList dans config_actions.json */
router.get('/', (req, res) => {
    if ((req.session.passport) && (req.session.passport.user != null)) {
        global.schemas[req.message.modelName].find({
                _id: req.query.id
        },
            (err, result) => {
                if (err) {
                    console.log('error : ', err);
                }
                console.log('data from id : ', result);
                global.schemas[req.message.modelName].find({_id: req.query.id}, (err, list) => {
                    console.log('list from id : ', list);
                    res.render(req.message.view, {
                        title: req.message.title,
                        form_action: req.message.form_action,
                        data: result[0],
                        msg: req.query.msg,
                        liste: list
                    });
                });

            }
        );
    } else {
        res.redirect('/'); // affichage boîte de login si pas authentifié
    }
});

module.exports = router;