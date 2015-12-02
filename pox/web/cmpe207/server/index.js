var express     = require('express'),
    app         = express();

app.get('/', function(req, res) {
  res.sendfile('switcher.html');
});

app.get('/small', function(req, res) {
  res.sendfile('small.jpg');
});

app.get('/4k',  nocache, sendContent, function(req, res) {
  res.sendfile('5k.jpg');
});

app.get('/5k', nocache, sendContent, function(req, res) {
  res.sendfile('5k_2.jpg');
});

app.listen(3000,'0.0.0.0');


function sendContent(req, res) {
    var localPath = 'some-file';
    var mimeType = '';
    fs.readFile(localPath, 'utf8', function (err, contents) {
        if (!err && contents) {
            res.header('Content-Type', mimeType);
            res.header('Content-Length', contents.length);
            res.end(contents);
        } else {
            res.writeHead(500);
            res.end();
        }
    });
}

function nocache(req, res, next) {
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    res.header('Expires', '-1');
    res.header('Pragma', 'no-cache');
    next();
}