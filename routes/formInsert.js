var express = require('express')
var router = express.Router()

router.get('/', (req, res, next)=>{
    console.log("from getView ")
        res.render(req.message.view, {
            title: req.message.title,
            page: req.message.page,
            form_action: req.message.form_action
        })
})
module.exports = router