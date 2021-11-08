var express = require('express')
var router = express.Router()
const nodemailer = require('nodemailer')
const jwt = require('jsonwebtoken')


/**Contrôleur pour récupérer les informations d'un utilisateur en fonction de ce qui entré dans l'input, puis envoi un mail pour reset le mot de passe */
router.post('/', (req, res, next) => {
    global.schemas[req.message.modelName].find({email: req.body.email}) 
        .then((result) => {
            let userMail = result[0].email
            let userId = result[0]._id
            let userPwd = result[0].mdp
            if(req.body.email === userMail) {
                /*
                let payload = {
                    email: userMail,
                    id: userId
                }
                let secret = userPwd
                let token = jwt.sign(payload, secret, {expiresIn: 60})
                console.log('token: ', token);
                */
                const url = `${process.env.CHANGE_PWD_URL}?u=${userId}`
                console.log(url);
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
                    to: userMail,
                    subject: 'Modification du mot de passe',
                    html: `
                    <div style="
                        display: block;
                        width: 100%;
                        max-width: 500px;
                        margin: 0 auto;
                        line-height: 50px;">
                            <h1>Bonjour</h1>
                            <p>Vous avez demandé à changer de mot de passe</p>
                            <p>Pour modifier votre mot de passe, veuillez cliquer sur le bouton ci-dessous</p>
                            <div style="width: 200px;
                                        height: 50px;
                                        background-color: black;
                                        text-align: center;
                                        cursor: pointer;
                                        border-radius: 10px;">
                            <a href="${url}" style="color: white; text-decoration: none;">Changer de mot de passe</a>            
                            </div>
                            <p>Si ce n'était pas vous, veuillez penser à changer votre mot de passe.</p>
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
                res.redirect(req.message.redirect + "?msg=Un email va vous être envoyé")
            }
        })
        .catch((err) => {
            console.log(err)
            res.redirect(req.message.redirect + "?msg=Il y a une erreur: Aucun email existant")         
        })
})

module.exports = router