const http = require('http');

test('Check server is running', (done)=>{
	// console.log(soln.info.uri);
	http.get('http://localhost:8080/siddharth', (response)=>{
		response.setEncoding('utf8');
		// console.log(response.statusCode);
		expect(response.statusCode).toBe(200);
		done();
	});
});
