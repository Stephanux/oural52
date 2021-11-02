var express = require('express');
var router = express.Router();
const nodemailer = require('nodemailer')
require('dotenv').config()

/**Contrôleur pour récupérer les informations d'un utilisateur en fonction de ce qui entré dans l'input, puis envoi un mail pour reset le mot de passe */
router.post('/', (req, res, next) => {
    global.schemas[req.message.modelName].find({email: req.body.email}) 
        .then((result) => {
            if(req.body.email === result[0].email) {
                console.log(result);
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
                    subject: 'Modification du mot de passe',
                    html: `
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
                res.redirect(req.message.redirect + "?msg=Un email va vous être envoyé")
            }
        })
        .catch((err) => {
            console.log(err);
            res.redirect(req.message.redirect + "?msg=Il y a une erreur: Aucun email existant")         
        })
});

module.exports = router;