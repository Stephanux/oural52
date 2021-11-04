const express = require('express')
const router = express.Router()

/* Contrôleur générique qui récupère une liste de données */
router.get('/', (req, res, next) => {
    if ((req.session.passport) && (req.session.passport.user != null)) {
        // ici on réalise une requête
        let i = 0 // indice pour parcourir le tableau req.message.tables_list
        let results = {}

        let getDataFromTable = (i, cbk) => {
            if (i < req.message.tables_list.length) {
                global.sequelize.query(req.message.sql_list[i], {
                    type: sequelize.QueryTypes.SELECT
                })
                    .then((result) => { // sql query success
                        console.log('listes des données : ', result)
                        // on copie les données obtenues par la requête dans la variable result
                        results[req.message.tables_list[i]] = result
                        getDataFromTable(i + 1, cbk)
                    }).catch((err) => { // sql query error
                        console.log('error select', err)
                        //res.send("error : ", err)
                    })
            } else {
                cbk() // appel de la callback pour faire le rendu
            }
        }
        getDataFromTable(i, () => {
            if (req.message.return_type == null) {
                /**On récupère les informations de l'utilisateur connecté */
                global.schemas[req.message.modelName].find({_id: req.session.passport.user})
                .then((user) => {
                    console.log('req.session: ',user)
                     // récupérer les données extraites de la base et les envoyées à une vue
                    res.render(req.message.view, {
                        title: req.message.title,
                        form_action: req.message.form_action,
                        msg: req.query.msg,
                        data: results, // Attention a renvoyer une variable avec un nom générique
                        user: user[0]
                    })
                })
                .catch((err) => {
                    console.log(err)
                })
            } else {
                res.setHeader('content-type', 'application/json')
                res.send(result)
            }
        })
        
    } else {
        res.redirect('/') // affichage boîte de login si pas authentifié
    }
})

module.exports = router