var net = require('net')
var server = net.createServer(function (socket) {
      // socket handling logic
      
	  var date = new Date()
      /*
      date.getFullYear()
    date.getMonth()     // starts at 0
    date.getDate()      // returns the day of month
    date.getHours()
    date.getMinutes()*/

var month = date.getMonth() + 1

var data = date.getFullYear() + '-' + (month.toString().length == 1?"0"+month:month)  + '-' + date.getDate() + ' ' + date.getHours() + ':' + (date.getMinutes().length == 1?"0"+date.getMinutes():date.getMinutes()) 
      socket.write(data+"\n")
      socket.end()
    })
    server.listen(process.argv[2])