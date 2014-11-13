var total = 0;
var numbers = process.argv.length;
for(var i = 2; i < numbers; i++) {
	total += Number(process.argv[i]);
}
console.log(total);
