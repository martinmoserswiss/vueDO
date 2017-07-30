#!/usr/bin/env nodejs
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(8080, 'localhost');
/*app.get('/',function(req,res){
  res.sendFile(path.join('/index.html'));
  //__dirname : It will resolve to your project folder.
});*/
console.log('Server running at http://localhost:8080/');