const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

/* SET user from _id with new data for an update into mongoDB . */
router.post(('/'), (req, res) => {
    if ((req.session.passport) && (req.session.passport.user != null)) {
        console.log('************ ', req.params)
        global.schemas[req.message.modelName].updateOne({ _id = new ObjectId(req.params._id) }, { $set = req.query }, (err, result)  => {
                if (err) { throw err; }

                console.log('from updateById: ', result);
                global.schemas[req.message.modelName].find({ _id: new ObjectId(req.params._id) }, (err, result) => {
                    if (err) { throw err; }
                    console.log('users: ', result);
                    res.redirect(req.message.redirect + "&msg=Modification correctement effectué");
                });
        }); // fin de l'update()
    } else {
        res.redirect('/');  // affichage boîte de login si pas authentifié
    }
});

module.exports = router;