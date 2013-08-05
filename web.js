var express = require('express');
var app = express();
app.use(express.logger());

var fs = require('fs');

var index = fs.readFileSync("index.html", "utf-8");

app.get('/', function(request, response) {
  response.send(index);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});