var http = require("http")
var url = require( "url" )
var queryString = require( "querystring" );

http.createServer(
    function (req, res) {
         if (req.method != 'GET')
        return res.end('send me a POST\n')
        // parses the request url
        var theUrl = url.parse( req.url );

        // gets the query part of the URL and parses it creating an object
        var queryObj = queryString.parse( theUrl.query );

        

        // as the object is created, the live below will print "bar"

        res.writeHead(200, { 'Content-Type': 'application/json' })
        var iso = queryObj.iso
        var date = new Date(iso)

        if(theUrl.pathname == '/api/parsetime'){
            
              res.end(JSON.stringify({ "hour": date.getHours(),
              "minute": date.getMinutes(),
              "second": date.getSeconds()}))
        }else if(theUrl.pathname == '/api/unixtime'){
            res.end(JSON.stringify({ "unixtime": date.getTime() }))
        }
    }
).listen(process.argv[2]);