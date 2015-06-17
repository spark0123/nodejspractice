var http = require('http')
var bl = require('bl')


var http_collect_prog = require('./http_collect_prog.js')


	http_collect_prog(process.argv[2], function(err, data){ 
			if(err)
				return console.error(err);
			console.log(data)
			http_collect_prog(process.argv[3], function(err, data){ 
			if(err)
				return console.error(err);
			console.log(data)
				http_collect_prog(process.argv[4], function(err, data){ 
				if(err)
					return console.error(err);
				console.log(data)
			
			});
			});
		});
