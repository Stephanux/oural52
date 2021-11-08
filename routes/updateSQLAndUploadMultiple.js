const express = require('express')
const router = express.Router()
const multer = require('multer')
const path = require('path')
const fs = require('fs')

/* POST UPDATE via Sequelize raw query . */
router.post(('/'), upload.fields(fieldUpload), (req, res, next) => {
    if ((req.session.passport) && (req.session.passport.user != null)) {

        // gestion du fichier uploaded via multer.
        console.log('files : ', req.files) // contient les infos sur les fichiers uploadés
        console.log('body : ', req.body) // contient les autres données du formulaire
        for (let i = 0; i < fieldUpload.length; i++) {
                if (req.files != null) {
                //supression des fichiers présent avant l'update
                fs.unlink("./public/data/uploads/" + req.body[fieldUpload[i].name], (err => {
                    if (err) console.log(err)
                    else{
                        console.log("\nDeleted file: " + req.body[fieldUpload[i].name])
                    }
                }))    
                delete req.body[fieldUpload[i].name]
                req.body[fieldUpload[i].name] = req.files[fieldUpload[i].name][0].originalname
                fs.renameSync(req.files[fieldUpload[i].name][0].path, req.files[fieldUpload[i].name][0].destination + req.files[fieldUpload[i].name][0].originalname)
            } else {
                req.body[fieldUpload[i].name] = ""
            }
        }

        // ici on réalise une requête pour mettre à jour la table "liens_p_d"
        let id_vehicule = req.body.nameV
        let id_piece = req.body.id
        delete req.body.nameV

        let params_name = req.message.params_query
        let params_value = []
        for (let i = 0; i < params_name.length; i++) {
            params_value.push(req.body[params_name[i]])
        }
        params_value.push(parseInt(req.query.id)) // ajout de l'id passé dans l'URL pour la clause Where
        console.log("params_value :", params_value)
        console.log("req.body : ", req.body)
        
        global.sequelize.query(`UPDATE liens_p_d SET id_vehicule = ${id_vehicule} WHERE liens_p_d.id_p_d = ${id_piece}`, {
            type: sequelize.QueryTypes.UPDATE
        })
        .then((result) => {
            //deuxième requête pour mettre à jour la table "pieces_detachees"
            console.log('listes retour updateSQL : ', result)
            global.sequelize.query(req.message.sql_query, {
                replacements: params_value,
                type: sequelize.QueryTypes.UPDATE
            })
            .then(() => { // sql query success
                res.redirect(req.message.redirect + '?msg=Modification correctement effectuée')
            }).catch((err) => { // sql query error
                console.log('error select', err)
                res.redirect(req.message.redirect + '?msg=Il y a une erreur')
            })
        })
    } else {
        res.redirect('/')  // affichage boîte de login si pas authentifié
    }
})

module.exports = router