
let inert = require('inert');
let hapi = require('hapi');
let path = require('path');

let server = new hapi.Server();
server.connection({
	host: 'localhost',
	port: Number(process.argv[2] || 8080)
});

server.register(inert, (err)=>{
	if (err)
		throw err;

	server.route({
		// path: '/',
		path: '/{param}',
		method: 'GET',
		handler: {
			directory: {
				path: path.join(__dirname, '/'),
				listing: true
			}
		}
	});

	server.start((err)=>{
		if (err){
			console.log(err);
		}
		//console.log('server started');
	});
});
