/* *********************************************************
**  Module générique pour faire un "deleteOne()" via l’_id *
** *********************************************************/
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

/* DELETE record from _id into url and into config_actions.json */
<<<<<<< HEAD
router.post(('/'), (req, res) => {
=======
router.post('/:_id', (req, res) => {
>>>>>>> 96c7cbe2c18fcf78e0dda7d8ce9af0e0f827cdb0
    if ((req.session.passport) && (req.session.passport.user != null)) {
        global.schemas[req.message.modelName].deleteOne({ _id: new ObjectId(req.params._id) }, (err, result) => {
            if (err) {
                throw err;
            }
            global.schemas[req.message.modelName].find({}, (err, result2) => {
                console.log("result after deleteById : ", result2);
                res.redirect(req.message.redirect);
            });
        });
    } else {
        res.redirect('/');
    }
});
module.exports = router;