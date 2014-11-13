var ls = require('./ls');
var dir = process.argv[2];
var ext = process.argv[3];

function printList(err, fileList) {
	if(err)
		return err;
	for(var i = 0; i < fileList.length; i++ ){
		console.log(fileList[i]);
	}
 	 
}

ls(dir, ext, printList);
