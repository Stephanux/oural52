var express = require('express')
var router = express.Router()

router.get('/', (req, res, next) => {
    if ((req.session.passport) && (req.session.passport.user != null)) {
    console.log("from getView ")
        res.render(req.message.view, {
            title: req.message.title,
            form_action: req.message.form_action
        })
    } else {
        res.redirect('/')
    }
})
module.exports = router