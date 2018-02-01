let hapi = require('hapi');
let vision = require('vision');
let Path = require('path');

let server = new hapi.Server();

server.connection({
	host: 'localhost',
	port: /*Number(process.argv[2] || */8080 //)
});

server.register(vision, (err) => {
	if (err)
		throw err;

	server.route({
		method: 'GET',
		path: '/',
		handler: {
			view: 'index.html'
		}
	});

	server.start((err) => {
		if (err)
			throw err;
	});
});

server.views({
	engines: {
		html: require('handlebars')
	},
	path: Path.join(__dirname, 'templates')
});
