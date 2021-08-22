var express = require('express');
var router = express.Router();

/* POST add page. */
router.post('/', (req, res, next) => {
	if ((req.session.passport) && (req.session.passport.user != null)) {
		let i = 0;
		if(i < req.message.table_list){
			global.sequelize.query(req.message.requests[i],
				{
					replacements: Object.values(req.body),
					type: sequelize.QueryTypes.INSERT
				})
				.then((datas) => {
					console.log('listes des datas : ', datas);
					res.redirect(req.message.redirect + '?msg=Ajout correctement effectué');
				}) // SQL query error return error into callback
				.catch((err) => {
					console.log('error select', err);
					res.redirect(req.message.redirect + '?msg=Il y a une erreur');
				});
		}
	} else {
		res.redirect('/')
	}
});

module.exports = router;