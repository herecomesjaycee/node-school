var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req, res) {
  var stream = fs.createReadStream(process.argv[3]);
  if (req) {
    stream.pipe(res);
  }
});
server.listen(parseInt(process.argv[2]));

//official answer
var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req, res) {
  res.writeHead(200, { "content-type": "text/plain" });

  fs.createReadStream(process.argv[3]).pipe(res);
});

server.listen(Number(process.argv[2]));
