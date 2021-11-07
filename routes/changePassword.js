var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

/**Contrôleur pour changer de mot de passe, puis le hash/sale avant l'insertion**/
router.post('/', async(req, res) => {
    /*
    .then((result) => {
        let secret = result[0].mdp
        let payload = jwt.decode(req.body.token, secret)
    })
    .catch((err) => {
        console.log(err)
    })
    */
    let pass = req.body.reset_pwd
    await bcrypt.hash(pass, 10)
        .then(async(hash) => {
            req.body.reset_pwd = hash              
            await global.schemas[req.message.modelName].updateOne({ _id: new ObjectId(req.body._id) }, { $set: {mdp: req.body.reset_pwd} }, (err, result) => {
                if (err) { 
                    throw err 
                }       
                console.log('from updateById: ', result);
                console.log('users: ', result);
                res.redirect(req.message.redirect + "?msg=Modification correctement effectué");
            }); // fin de l'update()
        })
        .catch((err) => {
            console.log(err)
            res.redirect(req.message.redirect + "?msg=Il y a eu une erreur")  
        })
});

module.exports = router;