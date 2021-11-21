const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId
const bcrypt = require('bcryptjs')
const nodemailer = require('nodemailer')
require('dotenv').config()

let passwordGenerate = () => {
    let dataLowerCase = "azertyuiopqsdfghjklmwxcvbn";
    let dataUppercase = dataLowerCase.toUpperCase();
    let dataNumbers = "0123456789";
    let dataSymbols = `$£^¨ù%*!§:/;.?,"'(-è_çé&)`;
    let data = []
    password = ""

    data.push(...dataLowerCase)
    data.push(...dataUppercase)
    data.push(...dataNumbers)
    data.push(...dataSymbols)

    for(i = 0; i < 8; i++) {
        password += data[Math.floor(Math.random() * data.length)];
    }
    return password
}

/**Ajouter un utilisateur avec hashage/salage du mot de passe */
router.post(('/'), async(req, res) => {
    /**Vérification si l'utilisateur détient un droit de pouvoir voir la page*/
    if ((req.session.passport) && (req.session.passport.user != null)) {
        /**Hashage mot de passe**/
        passwordGenerate()
        console.log('mot de passe généré: ',password)
        await bcrypt.hash(password, 10)
            .then(async(hash) => {
                req.body.mdp = hash
                // On doit créer via Mongoose un _id pour faire l'insertion dans la base
                if (!req.body._id) req.body._id = new ObjectId()
                /**Après le hashage/salage du mot de passe on fait la requête à la base de données */
                await global.schemas[req.message.modelName].create([req.body])
                    .then((result) => {
                        console.log('new user mongoose: ', result)
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
                                <div style="
                                display: block;
                                width: 100%;
                                max-width: 500px;
                                margin: 0 auto;
                                line-height: 50px;">
                                    <h1>Bonjour</h1>
                                    <p>Sauron vous a invité dans son club privé, veuillez changer de mot de passe</p>
                                    <p>Pour modifier votre mot de passe, veuillez cliquer sur le bouton ci-dessous</p>
                                    <div style="width: 200px;
                                                height: 50px;
                                                background-color: black;
                                                text-align: center;
                                                cursor: pointer;
                                                border-radius: 10px;">
                                    <a href="${url}" style="color: white; text-decoration: none;">Changer de mot de passe</a>            
                                    </div>
                                    <p style="font-size: 12px;">Ceci est un mail automatique, veuillez ne pas y répondre</p>
                                </div>
                                `
                            }
                            transporter.sendMail(mailOptions, (error, info) => {
                                if(error){
                                    console.log(error) 
                                } else {
                                    console.log('envoyé!! ' + info.response)
                                }
                            })
                            res.redirect(req.message.redirect + "?msg=Ajout correctement effectué")
                        }
                    })
                    .catch((err) => {
                        console.log('erreur :' , err)
                        res.redirect(req.message.redirect + "?msg=Il y a une erreur")
                    })                          
            })
            .catch((err) => console.log(err))
    } else {
        res.redirect('/')
    }
}); // fin de la gestion de la route
module.exports = router