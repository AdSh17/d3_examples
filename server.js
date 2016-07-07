var express = require('express');
var app = express();
app.use('/static',express.static('public'));
app.get('/',function(req,res){
  res.send('Hello World');
});

var server = app.listen(3000,function(){
 var host = server.address().address;
  var port = server.address().port;

console.log('listening on port', port);
});