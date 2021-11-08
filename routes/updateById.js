const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId
const bcrypt = require('bcryptjs')


/* Modification d'un utilisateur dans la base de données */
router.post(('/'), async(req, res) => {
    if ((req.session.passport) && (req.session.passport.user != null)) {
        let pass = req.body.mdp
        await bcrypt.hash(pass, 10)
            .then(async(hash) => {
                req.body.mdp = hash              
                await global.schemas[req.message.modelName].updateOne({ _id: new ObjectId(req.body._id) }, { $set: req.body }, function (err, result) {
                    if (err) { 
                        throw err 
                    }       
                    console.log('from updateById: ', result)
                    global.schemas[req.message.modelName].find({ _id: new ObjectId(req.body._id) }, (err, result) => {
                        if (err) { 
                            throw err 
                        }
                        console.log('users: ', result)
                        res.redirect(req.message.redirect + "?msg=Modification correctement effectué")
                    })
                }) // fin de l'update()
            })
            .catch((err) => console.log(err))
    } else {
        res.redirect('/')  // affichage boîte de login si pas authentifié
    }
})

module.exports = router