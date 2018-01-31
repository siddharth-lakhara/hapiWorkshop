
let inert = require('inert');
let hapi = require('hapi');

let server = new hapi.Server();
server.connection({
	host: 'localhost',
	port: 8080//Number(process.argv[2])
});

server.register(inert, (err)=>{
	if (err)
		throw err;

	server.route({
		path: '/',
		method: 'GET',
		handler: (request, reply)=>{
			reply.file('./index.html');
		}
	});

	server.start((err)=>{
		if (err){
			console.log(err);
		}
	});
});
