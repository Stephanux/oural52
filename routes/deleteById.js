/* *********************************************************
**  Module générique pour faire un "deleteOne()" via l’_id *
** *********************************************************/
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;

/* DELETE record from _id into url and into config_actions.json */
router.route('/').post((req, res) => {
    if ((req.session.passport) && (req.session.passport.user != null)) {
        global.schemas[req.message.modelName].deleteOne({ _id: new ObjectId(req.message.params_query) }, (err, result) => {
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