const http = require('http');

test('Check server is running', (done)=>{
	// console.log(soln.info.uri);
	http.get('http://localhost:8080', (response)=>{
		response.setEncoding('utf8');
		expect(response.statusCode).toBe(200);
		done();
	});
});

test('Verify correct request', (done)=>{
	let str = '';
	http.get('http://localhost:8080', (response)=>{
		response.setEncoding('utf8');
		response.on('data', (data)=>{
			str += data;
		});
		response.on('end', ()=>{
			expect(str).toMatch('Gur Chefhvg bs Uncv-arff');
			done();
		});
	});
});
