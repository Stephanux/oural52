const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId
const jwt = require('jsonwebtoken')

/**Contrôleur pour récupérer les informations d'un utilisateur en fonction de l'id passé dans l'url**/
router.get('/',(req, res, next) => {
    global.schemas[req.message.modelName].find({ _id: new ObjectId(req.query.u) })
        .then((result) => {
            //let secret = result[0].mdp
            //let payload = jwt.decode(req.params.token, secret)
            console.log(result[0])
            res.render(req.message.view, {
                title: req.message.title,
                msg: req.query.msg,
                form_action: req.message.form_action,
                //payload: req.params.id,
                //token: req.params.token,
                data: result[0]
            })     
        }).catch((err) =>{
            console.log(err)
            res.status(500).json({message: 'No user found'})
        })
})

module.exports = router