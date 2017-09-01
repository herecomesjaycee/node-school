var http = require("http");
var url = require("url");

var server = http.createServer(function(req, res) {
  res.writeHead(200, { "content-type": "application/json" });
  var query = url.parse(req.url, true)["query"]["iso"];
  var result = new Date(query);
  if (url.parse(req.url, true)["pathname"].includes("parsetime") == true) {
    json_obj = JSON.stringify({
      hour: result.getHours(),
      minute: result.getMinutes(),
      second: result.getSeconds()
    });
    res.end(json_obj);
  }

  json_obj = JSON.stringify({
    unixtime: Math.round(result.getTime())
  });
  res.end(json_obj);
});

server.listen(Number(process.argv[2]));

//official answer
var http = require("http");
var url = require("url");

function parsetime(time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  };
}

function unixtime(time) {
  return { unixtime: time.getTime() };
}

var server = http.createServer(function(req, res) {
  var parsedUrl = url.parse(req.url, true);
  var time = new Date(parsedUrl.query.iso);
  var result;

  if (/^\/api\/parsetime/.test(req.url)) {
    result = parsetime(time);
  } else if (/^\/api\/unixtime/.test(req.url)) {
    result = unixtime(time);
  }

  if (result) {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(result));
  } else {
    res.writeHead(404);
    res.end();
  }
});
server.listen(Number(process.argv[2]));
