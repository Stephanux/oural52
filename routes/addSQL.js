var express = require('express');
var router = express.Router();

/* POST add page. */
router.post('/', (req, res, next) => {
	if ((req.session.passport) && (req.session.passport.user != null)) {
		global.sequelize.query(req.message.request,
			{
				replacements: Object.values(req.body),
				type: sequelize.QueryTypes.INSERT
			})
			.then((datas) => {
				console.log('listes des datas : ', datas);
				res.render(req.message.view, {
					title: 'Oural-52'
				});
			}) // SQL query error return error into callback
			.catch((err) => {
				console.log('error select', err);
			});
	} else {
		res.redirect('/')
	}
});

module.exports = router;