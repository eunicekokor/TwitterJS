var express = require('express');
var morgan = require('morgan');

var app = express();

app.use(morgan('combined'))

app.get('/', function (req,res) {
	res.send('hello, world!')
})

var server = app.listen(3000, function() {
	var host = server.address().address
	var port = server.address().port

console.log('Listening at http://%s:%s', host, port)

})