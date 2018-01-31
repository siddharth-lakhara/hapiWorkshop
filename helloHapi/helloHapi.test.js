const soln = require('./solution');
const axios = require('axios');

test('Check server is running', ()=>{
	// console.log(soln.info.uri);
	expect(soln.info.uri).toMatch('http://localhost:8080');
});

test('Verify correct request', (done)=>{
	axios.get('http://localhost:8080/').
	//axios.get('http://httpbin.org/get').
		then((response)=>{
			//expect(response).toMatch('Hello hapi');
			let dataString = response.data;
			console.log(dataString);
			console.log('hello');
			done();
		});
});
