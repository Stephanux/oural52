const express = require('express')
const router = express.Router()

// Delete by id
router.post('/', (req, res) => {
    if ((req.session.passport) && (req.session.passport.user != null)) {
        let params_name = req.message.params_query;
        let params_value = [];
        for (let i = 0; i < params_name.length; i++) {
            params_value.push(req.body[params_name[i]]);
        }
        params_value.push(parseInt(req.query.id));
        console.log("params_value :", params_value);
        console.log("req.body : ", req.body);
        global.sequelize.query(req.message.sql_query,{
                replacements: params_value,
                type: sequelize.QueryTypes.DELETE
        })
            .then((datas) => {
                console.log('listes des datas: ', datas)
                res.redirect(req.message.redirect + '?msg=Supression correctement effectuée')
            })
            .catch((err) => {
                console.error('error select ', err);
                res.redirect(req.message.redirect + '?msg=Il y a une erreur');
            })
    } else {
        res.redirect('/')
    }
})

module.exports = router