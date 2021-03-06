const express = require('express')
const router = express.Router()
const multer = require('multer')
const path = require('path')
const fs = require('fs')

/* Modification data et fichier */
router.post(('/'), upload.single('doc_pdf'), function (req, res, next) {
    if ((req.session.passport) && (req.session.passport.user != null)) {       
        // gestion du fichier uploaded via multer.
        console.log('file : ', req.file) // contient les infos sur le fichier uploadé
        console.log('body : ', req.body) // contient les autres données du formulaire
        if(req.file != null){
            //supression du fichier présent avant l'update
            fs.unlink("./public/data/uploads/" + req.body[req.file.fieldname], (err => {
                if (err) console.log(err)
                else{
                    console.log("\nDeleted file: " + req.body[req.file.fieldname])
                }
            }))           
            delete req.body[req.file.fieldname]
            req.body[req.file.fieldname] = req.file.originalname
            fs.rename(req.file.path, req.file.destination + req.file.originalname, () => {
                console.log("\nFile : " + req.file.originalname + " Uploaded and Renamed!\n ")
            })
        }

        // ici on réalise une requête d'insertion dans une base SQL
        let params_name = req.message.params_query
        let params_value = []
        for (let i = 0; i < params_name.length; i++) {
            params_value.push(req.body[params_name[i]])
        }
        params_value.push(parseInt(req.query.id)) // ajout de l'id passé dans l'URL pour la clause Where
        console.log("params_value :", params_value)
        console.log("req.body : ", req.body)

        global.sequelize.query(req.message.sql_query, {
            replacements: params_value,
            type: sequelize.QueryTypes.UPDATE
        })
            .then((result) => {
                console.log('listes retour updateSQL : ', result)
                res.redirect(req.message.redirect + '?msg=Modification correctement effectuée')
            }).catch((err) => {
                console.log('error select', err)
                res.redirect(req.message.redirect + '?msg=Il y a une erreur')
            })
    } else {
        res.redirect('/')  // affichage boîte de login si pas authentifié
    }
})

module.exports = router