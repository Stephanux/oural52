router.route('/:_id').get(function (req, res) {
    if ((req.session.passport) && (req.session.passport.user != null)) {
        let results = {};
        global.sequelize.query(req.message.request, {
            replacements: req.body.id_vehicule,
            type: sequelize.QueryTypes.SELECT
        })
            .then(function (result) { // sql query success
                console.log('listes des données : ', result);

                function getDataFromTable(i, cbk) {
                    if (i < req.message.tables_list.length) {
                        global.sequelize.query(req.message.sql_list[i], {
                            type: sequelize.QueryTypes.SELECT
                        })
                            .then(function (result) { // sql query success
                                console.log('listes des données : ', result);
                                // on copie les données obtenues par la requête dans la variable data
                                results[req.message.tables_list[i]] = result;
                                getDataFromTable(i + 1, cbk)
                            }).catch(function (err) { // sql query error
                                console.log('error select', err);
                                //res.send("error : ", err);
                            });
                    } else {
                        cbk(); // appel de la callback pour faire le rendu
                    }
                }

                getDataFromTable(i, function () {
                    if (req.message.return_type == null) {
                        // récupérer les données extraites de la base et les envoyées à une vue
                        res.render(req.message.view, {
                            stitle: 'Connexion à BD SQL données Countries via Sequelize',
                            title: req.message.title,
                            libelle: req.message.libelle,
                            del_label: req.message.del_label,
                            form_action: req.message.form_action,
                            data: results // Attention a renvoyer une variable avec un nom generique
                        });
                    } else {
                        res.setHeader('content-type', 'application/json');
                        res.send(result);
                    }
                });

            }).catch(function (err) { // sql query error
                console.log('error select', err);
                //res.send("error : ", err);
            });
    } else {
        res.redirect('/'); // affichage boîte de login si pas authentifié
    }
});

module.exports = router;