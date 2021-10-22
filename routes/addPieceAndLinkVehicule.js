const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');

/* Ajoute une pièce, avec fichier(s) puis fais le lien avec la table "liens_p_d"  */
router.post('/', upload.fields(fieldUpload), (req, res, next) => {
    /**Vérification si l'utilisateur détient un droit de pouvoir voir la page*/
    if ((req.session.passport) && (req.session.passport.user != null)) {
        // gestion du fichier uploaded via multer.
        console.log('files : ', req.files); // contient les infos sur les fichiers uploadés
        console.log('body : ', req.body); // contient les autres données du formulaire

        for (let i = 0; i < fieldUpload.length; i++) {
            if (req.files[fieldUpload[i].name]) {
                req.body[fieldUpload[i].name] = req.files[fieldUpload[i].name][0].originalname;
                //nouvelle appellation du fichier uploader en fonction de son nom lors de l'insert
                fs.renameSync(req.files[fieldUpload[i].name][0].path, req.files[fieldUpload[i].name][0].destination + req.files[fieldUpload[i].name][0].originalname);
            } else {
                req.body[fieldUpload[i].name] = "";
            };
        };

        // insertion effective dans la base de données, en premier dans la table "pieces_detachees"
        const id_vehicule = req.body.nameV;
        delete req.body.nameV;
        /**On récupère la valeur de l'id véhicule puis on supprime le req.body.nameV pour éviter une erreur d'insertion, puis on effectue la requête */
        global.sequelize.query(req.message.request, {
            replacements: Object.values(req.body),
            type: sequelize.QueryTypes.INSERT
        })
        /**Traitement des données et redirection avec message de succès ou d'erreur */
        .then((datas) => {
            console.log("liste des datas : " + datas);
            // deuxième insertion effective dans la base de données, dans la table "liens_p_d"
            global.sequelize.query(`INSERT INTO liens_p_d (id_vehicule, id_p_d) VALUES (${id_vehicule}, ${datas[0]})`, {
                type: sequelize.QueryTypes.INSERT
            })
            .then(() => {
                res.redirect(req.message.redirect + '?msg=Ajout correctement effectué');
            }) // Gestion erreur
            .catch((err) => {
                console.log('error select', err);
                res.redirect(req.message.redirect + '?msg=Il y a une erreur');
            });
        });
    } else {
        res.redirect('/')
    }
});

module.exports = router;