const {
	handleHomePage,
	handleNotFound,
	handleBlogPageWithGET,
	handleBlogPageWithPost
	}  = require('./handeler')

const router = (req, res) => {
	const url = req.url;
	const method = req.method;

	/* Handle Home Page */
	if (url === '/') {
		handleHomePage(req, res);
	} 
	/* Handle blog page */
	else if (url === '/blog' && method === 'GET'){
		handleBlogPageWithGET(req, res)
	}
	else if (url === '/blog' && method === 'POST'){
		handleBlogPageWithPost(req, res)
	}
	/* Handle Not Found Page */
	else {
		handleNotFound (req, res);
	}
}

module.exports = router;

