var fs = require('fs')
fs.readFile(process.argv[2], function (err, data) {
  	if (err) throw err;
  	str = data.toString()
	console.log(str.split('\n').length -1) ;
});
