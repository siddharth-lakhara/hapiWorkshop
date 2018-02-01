
const hapi = require('hapi');
const fs = require('fs');
const rot13 = require('rot13-transform');
const path = require('path');

let server = new hapi.Server();
server.connection({
	port: Number(process.argv[2] || 8080),
	host: 'localhost'
});

server.route({
	path: '/',
	method: 'GET',
	handler: (req, reply)=>{
		let file = fs.createReadStream(path.join(__dirname, 'file.txt'));
		let encrypt = file.pipe(rot13());
		reply(encrypt);
	}
});

server.start((err)=>{
	if (err)
		throw err;
});
