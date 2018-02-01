
let inert = require('inert');
let hapi = require('hapi');
let path = require('path');

let server = new hapi.Server();
server.connection({
	host: 'localhost',
	port: Number(process.argv[2]) || 8080
});

server.register(inert, (err)=>{
	if (err)
		throw err;

	server.route({
		path: '/',
		method: 'GET',
		handler: (request, reply)=>{
			reply.file(path.join(__dirname, 'index.html'));
		}
	});

	server.start((err)=>{
		if (err){
			console.log(err);
		}
	});
});
