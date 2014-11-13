var fs = require('fs');

var filePath = process.argv[2];
var lineCount = undefined
function countLines(callback) {
	fs.readFile(filePath, function doneReading(err, fileContents) {
 		var lines = fileContents.toString().split('\n');
		lineCount = lines.length - 1;
		callback();
	})
}

function logLineCount() {
	console.log(lineCount);
}

countLines(logLineCount); 
