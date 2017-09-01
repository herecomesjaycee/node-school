var http = require("http");
var url = process.argv[2];

http
  .get(url, function(response) {
    var result = "";
    response.setEncoding("utf8");
    response.on("body", function(data) {
      result += data;
    });
    response.on("data", function(data) {
      result += data;
    });
    response.on("end", function(data) {
      console.log(result.length);
      console.log(result);
    });

    response.on("error", console.error);
  })
  .on("error", console.error);

// let body = [];
// request
//   .on("data", chunk => {
//     body.push(chunk);
//   })
//   .on("end", () => {
//     body = Buffer.concat(body).toString();
//     // at this point, `body` has the entire request body stored in it as a string
//   });
