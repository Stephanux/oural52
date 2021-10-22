const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');

/* Ajoute un véhicule, avec un fichier */
router.post('/', upload.single('doc_pdf'), (req, res, next) => {
    /**Vérification si l'utilisateur détient un droit de pouvoir voir la page*/
    if ((req.session.passport) && (req.session.passport.user != null)) {

        // gestion du fichier uploaded via multer.
        console.log('file : ', req.file); // contient les infos sur le fichier uploadé
        console.log('body : ', req.body); // contient les autres données du formulaire

        if(req.file != null){
            req.body[req.file.fieldname] = req.file.originalname;
            /**On renomme le fichier en fonction du nom du fichier entré par l'utilisateur */
            fs.rename(req.file.path, req.file.destination + req.file.originalname, () => {
                console.log("\nFile : " + req.file.originalname + " Uploaded and Renamed!\n ");
            });
        } else {
            req.body.doc_pdf = "";
        }

        // insertion effective dans la base de données
        global.sequelize.query(req.message.request, {
            replacements: Object.values(req.body),
            type: sequelize.QueryTypes.INSERT
        })
            /**Traitements des données et redirection */
            .then((datas) => {
                console.log('listes des datas : ', datas);
                res.redirect(req.message.redirect + '?msg=Ajout correctement effectué');
            }) // Gestion d'erreur
            .catch((err) => {
                console.log('error select', err);
                res.redirect(req.message.redirect + '?msg=Il y a une erreur');
            });
    } else {
        res.redirect('/')
    }
});

module.exports = router;