const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

/**Contrôleur pour récupérer les informations d'un utilisateur en fonction de l'id passé dans l'url**/
router.get('/', (req, res, next) => {
    console.log("from getView ");
    console.log(req.query);
    global.schemas[req.message.modelName].find({ _id: new ObjectId(req.query.id) })
        .then((result) => {
            console.log(result[0])
            res.render(req.message.view, {
                title: req.message.title,
                msg: req.query.msg,
                form_action: req.message.form_action,
                data: result[0]
            });
        }).catch((err) =>{
            console.log(err)
        })
});

module.exports = router;