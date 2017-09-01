var net = require("net");
var tcp_conn = process.argv[2];

//"YYYY-MM-DD hh:mm"
var server = net.createServer(function(socket) {
  date = new Date();
  date_array = [
    date.getFullYear(),
    ("0" + (date.getMonth() + 1)).slice(-2),
    ("0" + date.getDate()).slice(-2)
  ];
  time_array = [date.getHours(), date.getMinutes()];
  return socket.end(date_array.join("-") + " " + time_array.join(":") + "\n");
});
server.listen(parseInt(tcp_conn));

//official answer
var net = require("net");

function zeroFill(i) {
  return (i < 10 ? "0" : "") + i;
}

function now() {
  var d = new Date();
  return (
    d.getFullYear() +
    "-" +
    zeroFill(d.getMonth() + 1) +
    "-" +
    zeroFill(d.getDate()) +
    " " +
    zeroFill(d.getHours()) +
    ":" +
    zeroFill(d.getMinutes())
  );
}

var server = net.createServer(function(socket) {
  socket.end(now() + "\n");
});

server.listen(Number(process.argv[2]));
