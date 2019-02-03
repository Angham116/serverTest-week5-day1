const {
	handleHomePage,
	handleNotFound 
	}  = require('./handeler')

const router = (req, res) => {
	const url = req.url;
	const method = req.method;

	/* Handle Home Page */
	if (url === '/') {
		handleHomePage(req, res);
	} 
	/* Handle Not Found Page */
	else {
		handleNotFound (req, res);
	}
}

module.exports = router;