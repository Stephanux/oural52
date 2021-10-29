const express = require('express');
const router = express.Router();

/*  GET view page without to access to the database */
router.get('/', (req, res, next) => {
    console.log("from getView ");
    res.render(req.message.view, {
        title: req.message.title
    });

});

module.exports = router;