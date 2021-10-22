var express = require('express')
var router = express.Router()

/**Controleur qui affiche une vue avec connexion */
router.get('/', (req, res, next) => {
    /**Vérification si l'utilisateur détient un droit de pouvoir voir la page*/
    if ((req.session.passport) && (req.session.passport.user != null)) {
        console.log(req.session.passport)
        res.render(req.message.view, {
            title: req.message.title,
            form_action: req.message.form_action
        })
    } else {
        res.redirect('/')
    }
})
module.exports = router