require('newrelic');

var express = require('express');
var app = express();

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/dist'));

app.get('/', function(req, res) {

    res.render('dist/index');
});

app.listen(process.env.PORT || 3000, function () {
    console.log('Example app listening on port 3000!');
});

