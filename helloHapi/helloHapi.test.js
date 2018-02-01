// const soln = require('./helloHapi');
const axios = require('axios');
const http = require('http');

test('Check server is running', (done)=>{
	// console.log(soln.info.uri);
	http.get('http://localhost:8080/', (response)=>{
		response.setEncoding('utf8');
		console.log(response.statusCode);
		expect(response.statusCode).toBe(200);
		done();
	});
});

test('Verify correct request', (done)=>{
	http.get('http://localhost:8080/', (response)=>{
		response.setEncoding('utf8');
		response.on('data', (data)=>{
			expect(data).toMatch('Hello hapi');
			done();
		});
	});
	// ('http://localhost:8080/').
	// 	then((response)=>{
	// 	//expect(response).toMatch('Hello hapi');
	// 		let dataString = response.data;
	// 		console.log(dataString);
	// 		done();
	// 	});
});
