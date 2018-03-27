var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var QRCodeSchema = new Schema({
	identifier: String,	
})

var QRCode = mongoose.model('QRCode', QRCodeSchema);

//todo setup model

mongoose.connect("mongodb://mongo:27017", function (err) {
	if(err) throw err;
	console.log("connected to mongo");
})

app.get('/', function(req, res){
  res.send("Hello World");
});

app.get('/new', function(req, res){
  res.send("zxcvzxcv");
});

app.get('/32', function(req, res){
  res.send("zxcvzxcv");
});

app.get('/12', function(req, res){
  res.send("zxcvzxcv");
});

app.post('/res', function(req, res){

	var newQRCode = new QRCode({identifier: req.body.identifier});
	// console.log(req.body);

  res.send(newQRCode);
});

app.post('/getQRCode', function(req, res){

	var query = QRCode.findOne({'identifier': req.body.identifier});

	query.exec(function (err, qRCode) {
		if(err) {
			console.log(err);
		}
		console.log(qRCode);

	});
	// console.log(req.body.identifier);

	// console.log(req.body);

  res.sendStatus(200);
});

app.listen(3000, function(){
  console.log('Example app listening on port 3000!');
});