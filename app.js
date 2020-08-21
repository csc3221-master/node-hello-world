const http = require('http');

const hostname = 'boiling-forest-17755.herokuapp.com';
const port = 5000;

const server = http.createServer((request, response) => {
	response.statusCode = 200;
	response.setHeader('Content-Type', 'text/plain');
	response.end('Hello World\n\nCool!');
});

server.listen(port, hostname, () => {
	console.log(`Server Running at host: ${hostname}:${port}`);
});

