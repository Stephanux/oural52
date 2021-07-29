var express = require('express');
var router = express.Router();

/* POST add page. */
router.post('/', (req, res, next) => {
        
		global.sequelize.query(req.message.request,
			{
				type: sequelize.QueryTypes.INSERT
			})
        
			.then((datas) => {
				console.log('listes des datas : ', datas);
				res.render(req.message.view, {
					title: 'Oural-52',
					page: 'Ajoutez une pièce'
				});
			}) // SQL query error return error into callback
			.catch((err) => {
				console.log('error select', err);
			});
});

module.exports = router;