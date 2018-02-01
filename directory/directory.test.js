const http = require('http');

test('Check server is running', (done)=>{
	// console.log(soln.info.uri);
	http.get('http://localhost:8080/file.html', (response)=>{
		response.setEncoding('utf8');
		// console.log(response.statusCode);
		expect(response.statusCode).toBe(200);
		done();
	});
});

test('Verify correct request', (done)=>{
	http.get('http://localhost:8080/file.html', (response)=>{
		response.setEncoding('utf8');
		response.on('data', (data)=>{
			// console.log(data);
			expect(data).toMatch(`<html>
<head><title>Hello Handling</title></head>
  <body>
    Hello Handling
  </body>
</html>
`);
			done();
		});
	});
});
