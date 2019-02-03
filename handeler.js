const handleHomePage = (req, res) => {
	res.writeHead(200, {'Content-Type' : 'html/text'})
	res.end('Welcome To Home Page')
}

const handleNotFound = (req, res) => {
	res.writeHead(404, {'Content-Type' : 'html/text'})
	res.end('Sorry, Page Not Found')
}

const handleBlogPageWithGET = (req, res) => {
	res.writeHead(200, {'Content-Type' : 'html/text'})
	res.end('Welcome To Blog Page')
}

const handleBlogPageWithPost = (req, res) => {
	if (req.headers.password === 'potato') {
	let data = ''
	req.on('data', (chunckData) => {
		data += chunckData;
	})
	req.on('end', () => {
	res.writeHead(200, {'Content-Type' : 'application/json'})
	res.end(data)
	})
	}
}


module.exports = { 
	handleHomePage,
	handleNotFound,
	handleBlogPageWithGET,
	handleBlogPageWithPost
	} ;