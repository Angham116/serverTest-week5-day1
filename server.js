const http = require('http');
const router = require('./router');
const port = 5000;

const server = http.createServer(router);
server.listen(`This server is running on localhost:${port}`)