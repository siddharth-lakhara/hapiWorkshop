const hapi = require('hapi');

const server = new hapi.Server();
server.connection({
	host: 'localhost',
	port: Number(process.argv[2]) || '8080',
});

server.route({
	path: '/upload',
	method: 'POST',
	config: {
		payload: {
			output: 'stream',
			parse: true,
			allow: 'multipart/form-data'
		}
	},
	handler: (req, res)=>{
		let fileString = '';
		const {description} = req.payload;
		let returnJSON = {
			description,
		};
		req.payload.file.on('data', (data)=>{
			fileString += data;
		});
		req.payload.file.on('end', ()=>{
			returnJSON['file'] = {
				'data': fileString,
				'filename': req.payload.file.hapi.filename,
				'headers': req.payload.file.hapi.headers,
			};
			res(returnJSON);
		});
		
	}
});

server.start((err)=>{
	if (err) {
		throw err;
	} else {
		console.log('Server started on: ', server.info.uri);
	}
});
