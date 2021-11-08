/* ******************************************************
**  Module générique pour faire un "populate()" sans filtre *
** ******************************************************/
var express = require('express')
var router = express.Router()
var mongoose = require('mongoose')

/* Liste des utilisateurs */
router.get('/', (req, res, next) => {
    if ((req.session.passport) && (req.session.passport.user != null)) {
        /**Vérification si l'utilisateur détient un droit de pouvoir voir la page*/
        global.schemas[req.message.modelName].find({})
            .exec((err, result) => {
                if (err) {
                    console.log("error: ", err)
                    return handleError(err)
                } else {
                    console.log(result)
                    if (result.length == 0) result = null
                    if (req.message.return_type == null) {
                        /*On récupère les informations de l'utilisateur connecté */
                        global.schemas[req.message.modelName].find({_id: req.session.passport.user})
                        .then((user) => {
                            console.log('req.session: ',user)
                            res.render(req.message.view, {
                                title: req.message.title,
                                form_action: req.message.form_action,
                                msg: req.query.msg,
                                data: result,
                                user: user[0]
                            })
                        })
                        .catch((err) => {
                            console.log(err)
                        })                       
                    } else {
                        res.send(JSON.stringify(result))
                    }
                }
            }
        )
    } else {
        res.redirect('/')  // affichage boîte de login si pas authentifié
    }
})

module.exports = router