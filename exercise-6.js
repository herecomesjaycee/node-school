var filelist = require("./some-module.js");

var folder = process.argv[2];
var ext = process.argv[3];

filelist(folder, ext, function(err, data) {
  if (err) {
    console.log("Error!");
  } else {
    for (var i = 0; i < data.length; i++) {
      console.log(data[i]);
    }
  }
});
