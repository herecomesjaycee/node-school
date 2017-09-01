var http = require("http");
var url_array = [process.argv[2], process.argv[3], process.argv[4]];

url_array.forEach(function(url) {
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
        console.log(result);
      });

      response.on("error", console.error);
    })
    .on("error", console.error);
});

//official answer
// var http = require("http");
// var bl = require("bl");
// var results = [];
// var count = 0;

// function printResults() {
//   for (var i = 0; i < 3; i++) {
//     console.log(results[i]);
//   }
// }

// function httpGet(index) {
//   http.get(process.argv[2 + index], function(response) {
//     response.pipe(
//       bl(function(err, data) {
//         if (err) {
//           return console.error(err);
//         }

//         results[index] = data.toString();
//         count++;

//         if (count === 3) {
//           printResults();
//         }
//       })
//     );
//   });
// }

// for (var i = 0; i < 3; i++) {
//   httpGet(i);
// }
