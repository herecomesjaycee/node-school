var fs = require("fs");
var dir = process.argv[2].toString();
var fileType = "." + process.argv[3].toString();

function analyser(err, list) {
  if (err) {
    return console.log(err);
  }
  for (i = 0; i < list.length - 1; i++) {
    if (list[i].includes(fileType)) {
      console.log(list[i]);
    }
  }
}

fs.readdir(dir, function(err, list) {
  if (err) {
    return console.log(err);
  }
  fs.readdir(dir, "utf8", analyser(err, list));
});

// exercise 5 - answer
var fs = require("fs");
var path = require("path");

var folder = process.argv[2];
var ext = "." + process.argv[3];

fs.readdir(folder, function(err, files) {
  if (err) return console.error(err);
  files.forEach(function(file) {
    if (path.extname(file) === ext) {
      console.log(file);
    }
  });
});
