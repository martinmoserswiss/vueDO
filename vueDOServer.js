var express = require('express');
var path = require('path');
var app = express();

app.use('/dist', express.static(__dirname + '/dist'));

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname+'/index.html'));
});

app.listen(8080, function() {
	console.log("sali");
})