var express = require('express');
var morgan = require('morgan');
var swig = require('swig');

var app = express();

app.use(morgan('combined'));
app.engine('html', swig.renderFile);

app.set('views', __dirname + '/views');
app.set('view engine', 'html');

app.get('/', function (req,res) {
	var people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
	res.render( 'index', {title: 'Hall of Fame', people: people} );
});


var server = app.listen(3000, function() {
	var host = server.address().address
	var port = server.address().port
console.log('Listening at http://%s:%s', host, port)

})
