var express = require('express')
var router = express.Router()

/**Controleur qui affiche une vue avec connexion */
router.get('/', (req, res, next) => {
    /**Vérification si l'utilisateur détient un droit de pouvoir voir la page*/
    if ((req.session.passport) && (req.session.passport.user != null)) {
        /**On récupère les informations de l'utilisateur connecté */
        global.schemas[req.message.modelName].find({_id: req.session.passport.user})
            .then((user) => {
                console.log('req.session: ',user)
                res.render(req.message.view, {
                    title: req.message.title,
                    form_action: req.message.form_action,
                    user: user[0]
                })
            })
            .catch((err) => {
                console.log(err)
            })
    } else {
        res.redirect('/')
    }
})
module.exports = router