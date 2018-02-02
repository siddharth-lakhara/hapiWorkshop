let hapi = require('hapi');
let Joi = require('joi');

let server = new hapi.Server();

server.connection({
	host: 'localhost',
	port: Number(process.argv[2] || 8080 )
});

server.start((err) => {
	if (err)
		throw err;
});

server.route({
	method: 'GET',
	path: '/chicken/{breed}',
	config: {
		validate: {
			params: {
				with: Joi.string().required(),
				parameters: Joi.string().required()
			}
		},
		handler: (req, reply)=>{
			reply('Hey there: ' + req.params.breed);
		}
	}
});
