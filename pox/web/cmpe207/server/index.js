var express     = require('express'),
    app         = express(),
    fs          = require('fs'),
    path = require('path');

app.get('/api/v1/image/:no', function(req, res) {
    var img_name = req.params.no;
    res.sendFile(path.join(__dirname, img_name+'.jpg'));
    console.log("# of "+img_name+" immage was requested");
});


app.listen(3000,'0.0.0.0');
console.log("Server is listening on 3000");
