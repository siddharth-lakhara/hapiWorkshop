const h2o2 = require('h2o2');
const hapi = require('hapi');

const server = new hapi.Server();
server.connection({
	host: 'localhost',
	port: process.argv[2],
});

server.register(h2o2, (err)=>{
	if (err) {
		throw err;
	}
});

server.route({
	method: 'GET',
	path: '/proxy',
	handler: {
		proxy: {
			host: 'localhost',
			port: 65535,
		}
	}
});

server.start((err)=>{
	if (err) {
		console.log(err);
	}
});