const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer')
require('dotenv').config()

/**Ajouter un utilisateur avec hashage/salage du mot de passe */
router.post(('/'), async(req, res) => {
    /**Vérification si l'utilisateur détient un droit de pouvoir voir la page*/
    if ((req.session.passport) && (req.session.passport.user != null)) {
        /**Hashage mot de passe**/
        req.body.mdp = Math.random().toString(36)
        let pass = req.body.mdp;
        console.log(pass);
        await bcrypt.hash(pass, 10)
            .then(async(hash) => {
                req.body.mdp = hash
                // On doit créer via Mongoose un _id pour faire l'insertion dans la base
                if (!req.body._id) req.body._id = new ObjectId();
                /**Après le hashage/salage du mot de passe on fait la requête à la base de données */
                await global.schemas[req.message.modelName].create([req.body])
                    .then((result) => {
                        console.log('insertOne mongoose: ', result);
                        console.log('email: ', result[0].email);
                        if(req.body.email === result[0].email) {
                            const url = `http://localhost:3040/changePassword?id=${result[0]._id}`
                            let transporter = nodemailer.createTransport({
                                host: process.env.MAIL_HOST,
                                port: process.env.MAIL_PORT,
                                secure: true,
                                auth: {
                                    user: process.env.MAIL_USER,
                                    pass: process.env.MAIL_PASSWORD
                                }
                            })
                            let mailOptions = {
                                from: process.env.MAIL_FROM,
                                to: result[0].email,
                                subject: 'Création de compte',
                                html: `
                                <div>
                                    <h1>Bonjour</h1>
                                    <p>Sauron vous a invité dans son club privé, veuillez changer de mot de passe</p>
                                </div>
                                <div>
                                    <p>Pour modifier votre mot de passe, veuillez cliquer <a href="${url}">ici</a></p>
                                </div>
                                `
                            }
                            transporter.sendMail(mailOptions, (error, info) => {
                                if(error){
                                    console.log(error) 
                                } else {
                                    console.log('envoyé!! ' + info.response);
                                }
                            })
                            res.redirect(req.message.redirect + "?msg=Ajout correctement effectué")
                        }
                    })
                    .catch((err) => {
                        console.log('erreur :' , err);
                        res.redirect(req.message.redirect + "?msg=Il y a une erreur")
                    })                          
            })
            .catch((err) => console.log(err))
    } else {
        res.redirect('/');
    }
}); // fin de la gestion de la route
module.exports = router;