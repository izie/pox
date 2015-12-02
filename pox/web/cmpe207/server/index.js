var express     = require('express'),
    app         = express(),
    fs          = require('fs'),
    path = require('path');

app.get('/', function(req, res) {
  res.sendfile('switcher.html');

});

app.get('/small', function(req, res) {
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    res.header('Expires', '-1');
    res.header('Pragma', 'no-cache');

  res.sendFile(path.join(__dirname, 'small.jpg'));
    console.log("Small Image Requested");
});

app.get('/4k',  function(req, res) {
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    res.header('Expires', '-1');
    res.header('Pragma', 'no-cache');

    res.sendFile(path.join(__dirname, '5k.jpg'));
    console.log("4k Image Requested");
});

app.get('/5k', function(req, res) {
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    res.header('Expires', '-1');
    res.header('Pragma', 'no-cache');

    res.sendFile(path.join(__dirname, '5k_2.jpg'));
    console.log("5k Image Requested");
});

app.listen(3000,'0.0.0.0');
console.log("Server is listening on 3000");

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