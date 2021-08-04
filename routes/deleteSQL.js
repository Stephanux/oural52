var express = require('express')
var router = express.Router()

// Delete by id
router.route('/_id').get((req, res)=>{
    if ((req.session.passport) && (req.session.passport.user != null)){
        
        global.sequelize.query(req.statusMessage.request,
            {
                type: sequelize.QueryTypes.DELETE
            })
            .then((datas)=>{
                console.log('listes des datas: ', datas)
                res.render(req.message.view, {
                    title: 'Oural-52',
                    page: 'Supprimez la pièce'
                })
            })
            .catch((err)=>{
                console.error('error select ', err);
            })      
    } else {
        res.redirect('/')
    }
})

module.exports = router