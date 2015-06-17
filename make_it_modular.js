var filtered_ls = require('./filtered_ls.js')

var filter_ext = process.argv[3]
filtered_ls(process.argv[2], filter_ext, function(err, data){ 
			if(err)
				return console.error(err);
			data.forEach(function(file){console.log(file)})
		
	});
