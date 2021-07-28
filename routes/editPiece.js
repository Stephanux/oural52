var express = require('express');
var router = express.Router();

/* POST add page. */
router.route('/_id').get( (req, res, next) => {
        
		global.sequelize.query(req.message.request,
			{
				type: sequelize.QueryTypes.UPDATE
			})
        
			.then((datas) => {
				console.log('listes des datas : ', datas);
			res.render(req.message.view, {
				title: 'Oural-52', 
				page: 'Modifiez une pièce'
			});
			}) // SQL query error return error into callback
			.catch((err) => {
				console.log('error select', err);
			});
});

module.exports = router;