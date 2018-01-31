const hapi = require('hapi');

let handlerFunction = (request, reply)=>{
	reply('Hello ' + request.params.name);
};

let server = new hapi.Server();
server.connection({
	host: 'localhost',
	port: 8080//Number(process.argv[2])
});

server.route({
	path: '/{name}',
	method: 'GET',
	handler: handlerFunction
});

server.start((err)=>{
	if (err)
		console.log(err);
});

module.exports = server;
