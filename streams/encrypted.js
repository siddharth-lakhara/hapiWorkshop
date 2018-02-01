const rot13 = require('rot13-transform');
const fs = require('fs');

let rStream = fs.createReadStream('streams/file.txt');
let encrypt = rStream.pipe(rot13());


// let a = rot13('Hey there!');
// file.pipe();
