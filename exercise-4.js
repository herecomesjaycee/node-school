//exercise 4
process.argv;

var fs = require("fs");

var file_buf = process.argv[2].toString();

var lines = undefined;

function count_lines(callback) {
  fs.readFile(file_buf, "utf8", function doneReading(err, fileContents) {
    if (err) {
      console.log(err);
    } else {
      lines = fileContents.split("\n").length - 1;
      callback();
    }
  });
}

function logMyLines() {
  console.log(lines);
}

count_lines(logMyLines);

//exercise 4 - answer
var fs = require("fs");
var file = process.argv[2];

function analyse(err, data) {
  if (err) {
    return console.log(err);
  }
  console.log(data.toString().split("\n").length - 1);
}

fs.readFile(file, function(err, contents) {
  if (err) {
    return console.log(err);
  }
  // fs.readFile(file, 'utf8', callback) can also be used
  fs.readFile(file, "utf8", analyse(err, contents));
});
