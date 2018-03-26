var express = require('express');
var app = express();
app.get('/', function(req, res){
  res.send("Hello World");
});

app.get('/asdf', function(req, res){
  res.send("zxcvzxcv");
});

app.get('/res', function(req, res){
  res.send(req.query);
});

app.listen(3000, function(){
  console.log('Example app listening on port 3000!');
});