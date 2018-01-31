const routes = require('./routes');
const axios = require('axios');

test('Verify server running', ()=>{
	expect(routes.info.uri).toBe('http://localhost:8080');
});
