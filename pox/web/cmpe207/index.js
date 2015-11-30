var express     = require('express'),
    app         = express();

app.get('/', function(req, res) {
  res.sendfile('switcher.html');
});

app.get('/small', function(req, res) {
  res.sendfile('small.mp4');
});

app.get('/medium', function(req, res) {
  res.sendfile('medium.mp4');
});

app.get('/large', function(req, res) {
  res.sendfile('large.mp4');
});

app.listen(3000,'0.0.0.0');