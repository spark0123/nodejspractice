var http = require('http')
var bl = require('bl')

http.get(process.argv[2], function(res) {
  //console.log("Got response: " + res.statusCode);
  //res.setEncoding('utf8');
  res.pipe(bl(function (err, data) {  
  	console.log(data.toString().length)
  	console.log(data.toString())}))
  //res.on("data", function (chunk) { console.log(chunk) })
  //res.end();
}).on('error', function(e) {
  console.log("Got error: " + e.message);
});