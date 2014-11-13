var fs = require('fs');

var filepath = process.argv[2];
var fileBuffer = fs.readFileSync(filepath);
var fileContents = fileBuffer.toString();
var lines = fileContents.split('\n');
console.log(lines.length-1);
