const hapi = require('hapi');

let handlerFunction = (request, reply)=>{
	reply('Hello hapi');
};

let server = new hapi.Server();
server.connection({
	host: 'localhost',
	port: 8080//Number(process.argv[2])
});

server.route({
	path: '/',
	method: 'GET',
	handler: handlerFunction
});

server.start((err)=>{
	if (err)
		console.log(err);
	console.log('Server Started: ', server.info.uri);
});

// console.log('Server running: ', server.info.uri);

// module.exports = server;
