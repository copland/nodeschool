var path = require('path');
var fs = require('fs');
var dir = process.argv[2];
var extension = '.' + process.argv[3];

var filteredList = [];

fs.readdir( dir, function doneScanning(err, list) {
	for(var file = 0; file < list.length; file++) {
		if(path.extname(list[file]) == extension)
			console.log(list[file]);
	}
})
