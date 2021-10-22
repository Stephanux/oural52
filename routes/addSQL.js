const express = require('express');
const router = express.Router();

/* Contrôleur générique pour les ajouts sans spécificitées */
router.post('/', (req, res, next) => {
	/**Vérification si l'utilisateur détient un droit de pouvoir voir la page*/
	if ((req.session.passport) && (req.session.passport.user != null)) {
		/**Requête*/
		global.sequelize.query(req.message.request,
			{
				replacements: Object.values(req.body),
				type: sequelize.QueryTypes.INSERT
			})
			/**Traitement des données et redirection avec message de succès ou d'erreur */
			.then((datas) => {
				console.log('listes des datas : ', datas);
				res.redirect(req.message.redirect + '?msg=Ajout correctement effectué');
			}) // SQL query error return error into callback
			.catch((err) => {
				console.log('error select', err);
				res.redirect(req.message.redirect + '?msg=Il y a une erreur');
			});
	} else {
		res.redirect('/')
	}
});

module.exports = router;