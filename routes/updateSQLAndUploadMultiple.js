var express = require('express');
var router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');

/* POST UPDATE via Sequelize raw query . */
router.post(('/', upload.fields(fieldUpload)), function (req, res, next) {
    if ((req.session.passport) && (req.session.passport.user != null)) {
        
        // gestion du fichier uploaded via multer.
        console.log('files : ', req.files); // contient les infos sur les fichiers uploadés
        console.log('body : ', req.body); // contient les autres données du formulaire
        for (let i = 0; i < fieldUpload.length; i++) {
            req.body[fieldUpload[i].name] = req.files[fieldUpload[i].name][0].originalname;
            fs.renameSync(req.files[fieldUpload[i].name][0].path, req.files[fieldUpload[i].name][0].destination + req.files[fieldUpload[i].name][0].originalname);
        }

        // ici on réalise une requête d'insertion dans une base SQL
        var params_name = req.message.params_query;
        var params_value = [];
        for (let i = 0; i < params_name.length; i++) {
            params_value.push(req.body[params_name[i]]);
        }
        params_value.push(parseInt(req.query.id)); // ajout de l'id passé dans l'URL pour la clause Where
        console.log("params_value :", params_value);
        console.log("req.body : ", req.body);
        
        global.sequelize.query(req.message.sql_query, {
            replacements: params_value,
            type: sequelize.QueryTypes.UPDATE
        })
            .then(function (result) { // sql query success
                console.log('listes retour updateSQL : ', result);
                res.redirect(req.message.redirect + '?msg=Modification correctement effectuée');
            }).catch(function (err) { // sql query error
                console.log('error select', err);
                res.redirect(req.message.redirect + '?msg=Il y a une erreur');
                res.send('Erreur : ' + err);
            });
    } else {
        res.redirect('/');  // affichage boîte de login si pas authentifié
    }
});

module.exports = router;