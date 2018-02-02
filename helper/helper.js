let hapi = require('hapi');
let vision = require('vision');
let Path = require('path');

let server = new hapi.Server();

// let helper = (dir)=>{
// 	let filePath = Path.join(__dirname, dir);
// 	fs.readDir(filePath, (err, item)=>{
// 		console.log(item);
// 	});
// };

server.connection({
	host: 'localhost',
	port: Number(process.argv[2] || 8080 )
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
	path: Path.join(__dirname, 'templates'),
	helpersPath: Path.join(__dirname, 'helperHandler')
});

// module.exports = server;
