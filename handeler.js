const handleHomePage = (req, res) => {
	res.writeHead(200, {'Content-Type' : 'html/text'})
	res.end('Welcome To Home Page')
}

const handleNotFound = (req, res) => {
	res.writeHead(404, {'Content-Type' : 'html/text'})
	res.end('Sorry, Page Not Found')
}
module.exports = { 
	handleHomePage,
	handleNotFound 
	} ;