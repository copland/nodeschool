var fs = require('fs');
var path = require('path');

module.exports = function ls( directory, extension, callback) {

	var filteredList = [];
	fs.readdir(directory, function doneScanning(err, list) {
		if(err)
			return callback(err);
	//for(var i = 0; i < list.length; i++) {
	//if(path.extname(list[i]) == extension)
	//	filteredList.push(list[i]);
	//

		filteredList = list.filter(hasExtension, extension);
		callback(err, filteredList);
	})

}	

function hasExtension(filePath, extension) {
	extension = '.' + extension;
	return (path.extname(filePath) == extension);
}

Array.prototype.filter = function(fun, extension) {
	
	var res = new Array();
	var thisp = arguments[1];
	for(var i = 0; i < this.length; i++) {
		if(i in this) {
			var val = this[i];
			if( fun.call(this, val, extension) ) {
				res.push(val);
			}
		}
	}
	return res;
};
