var express = require('express');
var router = express.Router();

/* POST add page. */
router.post('/', (req, res, next) => {
	if ((req.session.passport) && (req.session.passport.user != null)) {
		let i = 0; // indice pour parcourir le tableau req.message.tables_list
		let results = {};

		let setDataIntoListTable = (i, cbk) => {
			if(i < req.message.table_list.length){
				global.sequelize.query(req.message.requests[i],
					{
						replacements: Object.values(req.body),
						type: sequelize.QueryTypes.INSERT
					})
					.then((result) => {
						console.log('listes des ajouts : ', result);
						results[req.message.table_list[i]] = result // on copie les données obtenues par la requête dans la variable result
						setDataIntoListTable( i + 1, cbk)
					}) // SQL query error return error into callback
					.catch((err) => {
						console.log('error select', err);
					});
			} else {
				cbk();
			}
		}

		setDataIntoListTable(i, () => {
			if (req.message.return_type == null) {
				res.redirect(req.message.redirect + '?msg=Ajout correctement effectué');
			} else {
				res.redirect(req.message.redirect + '?msg=Il y a une erreur');
			}
		})
	} else {
		res.redirect('/')
	}
});

module.exports = router;