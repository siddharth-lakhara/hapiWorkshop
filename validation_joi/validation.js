const hapi = require('hapi');
const Joi = require('joi');

const server = new hapi.Server();
server.connection({
	host: 'localhost',
	port: Number(process.argv[2]) || '8080',
});

server.route({
	method: 'POST',
	path: '/login',
	config: {
		validate: {
			payload: Joi.object({
				username: Joi.string(),
				password: Joi.string().alphanum(),
				accessToken: Joi.string().alphanum(),
				isGuest: Joi.boolean()
			})
				.options({allowUnknown: true})
				.with('username', 'isGuest')
				.without('password', 'accessToken')
		}
	},
	handler: (req, response)=>{
		response('login successful');
	},

});

server.start((err)=>{
	if (err){
		throw err;
	} else {
		console.log('server started');
	}
});