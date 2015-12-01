var express     = require('express'),
    app         = express();

app.get('/', function(req, res) {
  res.sendfile('switcher.html');
});

app.get('/small', function(req, res) {
  res.sendfile('small.jpg');
});

app.get('/4k', function(req, res) {
  res.sendfile('5k.jpg');
});

app.get('/5k', function(req, res) {
  res.sendfile('5k_2.jpg');
});

app.listen(3000,'0.0.0.0');