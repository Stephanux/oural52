const express = require('express');
const router = express.Router();

/* Liste des utilisateurs */
router.get('/', (req, res, next) => {
    if ((req.session.passport) && (req.session.passport.user != null)) {
        global.schemas[req.message.modelName].find({}, (err, result) => {
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