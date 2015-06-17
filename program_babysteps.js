var output = 0;
for(var i=0; i< process.argv.length; i++){
	if(i>1){
		//console.log(process.argv[i]);
		output += parseInt(process.argv[i]);
	}
}
console.log( output );
