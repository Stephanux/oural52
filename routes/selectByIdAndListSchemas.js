const express = require('express')
const router = express.Router()

/**Récupère des données en fonction de l'id envoyé dans l'url puis l'affiche */
router.get(('/'), (req, res) => {
    if ((req.session.passport) && (req.session.passport.user != null)) {
        let results = {}
        let i = 0
        let params_value = []
        params_value.push(parseInt(req.query.id))
        /**Requête à la base de donnée */
        global.sequelize.query(req.message.sql_query, {
            replacements: params_value,
            type: sequelize.QueryTypes.SELECT
        })
            .then((result) => { // sql query success
                console.log('listes des données : ', result)
                let getDataFromTable = (i, cbk) => {
                    if (i < req.message.tables_list.length) {
                        global.sequelize.query(req.message.sql_list[i], {
                            type: sequelize.QueryTypes.SELECT
                        })  
                            /**Traitement des données suite à la réussi de la requête */
                            .then((result) => { 
                                console.log('listes des données data : ', result)
                                // on copie les données obtenues par la requête dans la variable data
                                results[req.message.tables_list[i]] = result
                                console.log('listes des données datas : ', results)
                                getDataFromTable(i + 1, cbk)
                            }).catch((err) => { // sql query error
                                console.log('error select', err)
                            })
                    } else {
                        cbk() // appel de la callback pour faire le rendu
                    }
                }
                getDataFromTable(i, () => {
                    if (req.message.return_type == null) {
                        /**Vérification si l'utilisateur détient un droit de pouvoir voir la page*/
                        global.schemas[req.message.modelName].find({_id: req.session.passport.user})
                            .then((user) => {
                                console.log('req.session: ',user)
                                // récupérer les données extraites de la base et les envoyées à une vue
                                res.render(req.message.view, {
                                    stitle: 'Connexion à BD SQL données Countries via Sequelize',
                                    title: req.message.title,
                                    form_action: req.message.form_action,
                                    datas: results, // Attention a renvoyer une variable avec un nom generique
                                    data: result[0],
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
            }).catch((err) => { 
                console.log('error select', err)
            })
    } else {
        res.redirect('/') // affichage boîte de login si pas authentifié
    }
})

module.exports = router