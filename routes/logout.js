const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId
/* Déconnexion et redirection à la page login */
router.post('/',(req, res, next) => {
    if ((req.session.passport) && (req.session.passport.user != null)) {
		let newDate = new Date(Date.now()).toLocaleDateString('fr-FR', {
            year: "numeric",
            month: "numeric",
            day: "numeric",
            hour: "numeric",
            minute: "numeric"
        })
        req.body.lastLogin = newDate
        global.schemas[req.message.modelName].updateOne({_id: new ObjectId(req.session.passport.user)}, { $set: req.body })
        .then((result) => {
			console.log(result)
            console.log('lastLogin: ',result[0].lastLogin)
        })
        .catch((err) => {
            console.log(err)
        })
         req.logout() // efface de la session.passport la propriété user
         res.redirect('/')
    } else res.redirect('/')
})
module.exports = router