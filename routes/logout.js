const express = require('express')
const router = express.Router()
/* Déconnexion et redirection à la page login */
router.get('/',(req, res, next) => {
        if ((req.session.passport) && (req.session.passport.user != null)) {
             req.logout(); // efface de la session.passport la propriété user
             res.redirect('/')
        } else res.redirect('/')
});
module.exports = router