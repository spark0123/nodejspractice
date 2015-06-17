var fs = require('fs')
buf = fs.readFileSync(process.argv[2]);
str = buf.toString()
console.log(str.split('\n').length -1) ;
