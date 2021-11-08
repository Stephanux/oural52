const express = require('express')
const router = express.Router()

/**Contrôleur pour la supression générique**/
router.post('/', (req, res) => {
    /**Vérification si l'utilisateur détient un droit de pouvoir voir la page*/
    if ((req.session.passport) && (req.session.passport.user != null)) {
        /**On récupère les deux id depuis le fichier config_action.json */
        let params_name = req.message.params_query
        let params_value = []
        for (let i = 0; i < params_name.length; i++) {
            params_value.push(req.body[params_name[i]])
        }
        params_value.push(parseInt(req.query.id))
        console.log("params_value :", params_value)
        console.log("req.body : ", req.body)
        /**Requête à la base données */
        global.sequelize.query(req.message.sql_query,{
                replacements: params_value,
                type: sequelize.QueryTypes.DELETE
        })  
            /**Traitement des données puis redirection*/
            .then((datas) => {
                console.log('listes des datas: ', datas)
                res.redirect(req.message.redirect + '?msg=Supression correctement effectuée')
            })
            .catch((err) => {
                console.error('error select ', err)
                res.redirect(req.message.redirect + '?msg=Il y a une erreur')
            })
    } else {
        res.redirect('/')
    }
})

module.exports = router