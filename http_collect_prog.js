var http = require('http')
var bl = require('bl')

module.exports = function(url, callback) {
	http.get(url, function(res) {
	  res.pipe(bl(function (err, data) {  
	  callback(null, data.toString())
	}))

	}).on('error', function(e) {
	  console.log("Got error: " + e.message);
	});
};