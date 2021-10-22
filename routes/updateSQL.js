const express = require('express')
const router = express.Router()

/* Modification SQL générique */
router.post(('/'), (req, res, next) => {
    if ((req.session.passport) && (req.session.passport.user != null)) {
        // ici on réalise une requête d'insertion dans une base SQL
        let params_name = req.message.params_query
        let params_value = []
        for (let i = 0; i < params_name.length; i++) {
            params_value.push(req.body[params_name[i]])
        }
        params_value.push(parseInt(req.query.id)) // ajout de l'id passé dans l'URL pour la clause Where
        console.log("params_value :", params_value)
        console.log("req.body : ", req.body)
        /**Requête à la base de données */
        global.sequelize.query(req.message.sql_query, {
            replacements: params_value,
            type: sequelize.QueryTypes.UPDATE
        })
            /**Traitement des données et redirection */
            .then((result) => {
                console.log('listes retour updateSQL : ', result)
                res.redirect(req.message.redirect + '?msg=Modification correctement effectuée')
            }).catch((err) => {
                console.log('error select', err)
                res.redirect(req.message.redirect + '?msg=Il y a une erreur')
                res.send('Erreur : ' + err)
            })
    } else {
        res.redirect('/')  // affichage boîte de login si pas authentifié
    }
})

module.exports = router