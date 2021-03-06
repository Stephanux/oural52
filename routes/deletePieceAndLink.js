const express = require('express')
const router = express.Router()

// Supprime une pièce ainsi que le lien dans la table de jointure
router.post('/', (req, res) => {
    /**Vérification si l'utilisateur détient un droit de pouvoir voir la page*/
    if ((req.session.passport) && (req.session.passport.user != null)) {
        /**On récupère l'id depuis le fichier config_action.json */
        let params_name = req.message.params_query
        let params_value = []
        for (let i = 0; i < params_name.length; i++) {
            params_value.push(req.body[params_name[i]])
        }
        params_value.push(parseInt(req.query.id))
        console.log("params_value :", params_value)
        console.log("req.body : ", req.body)
        //première suppression de la base liens_p_d
        const id_p_d = req.body.id_piece
        global.sequelize.query(req.message.sql_query,{
                replacements: params_value,
                type: sequelize.QueryTypes.DELETE
        })
        .then((datas) => {
            console.log('listes des datas: ', datas)
            //deuxième suppression de la base pieces_detachees
            global.sequelize.query(`DELETE FROM pieces_detachees WHERE pieces_detachees.id_p_d = ${id_p_d}`, {
                type: sequelize.QueryTypes.DELETE
            })
            /**Redirection */
            .then(() => {
                res.redirect(req.message.redirect + '?msg=Supression correctement effectuée')
            })
            .catch((err) => {
                console.error('error select ', err)
                res.redirect(req.message.redirect + '?msg=Il y a une erreur')
            })
        })
    } else {
        res.redirect('/')
    }
})

module.exports = router