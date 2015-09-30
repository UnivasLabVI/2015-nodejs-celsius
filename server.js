var express = require('express');
var app = express();


//to provide static files to web browser
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.redirect ('/index.html');  
});

app.get ('/api/celsius', function (req, res) {
    var
        celsius = parseFloat(req.query.celsius),
        TempService = require('./app/TempService'),
        bmiIndex = 0;
    
    bmiIndex = TempService.getIndex(celsius);
    
        
    res.send(bmiIndex.toString());
    
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});