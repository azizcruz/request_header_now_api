// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var os = require("os")


// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// parse application/json
app.use(bodyParser.json())

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));




// http://expressjs.com/en/starter/basic-routing.html
app.get("/client/data", function (request, response) {
  var iface = os.networkInterfaces();
  var ip = iface.eth0[0].address;
  var lang = request.headers["accept-language"].split(",")[0];
  
  console.log(process.platform)
  response.end();
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
