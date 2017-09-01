var fs = require("fs");
var path = require("path");

// answer
// module.exports = function(folder, ext, callback) {
//   fs.readdir(folder, function(err, files) {
//     if (err) return console.error(err);
//     files.forEach(function(file) {
//       if (path.extname(file) === ext) {
//         console.log(file);
//       }
//     });
//   });
// };

module.exports = function(dir, ext, callback) {
  fs.readdir(dir, function(err, data) {
    if (err) callback(err);
    else {
      var files = [];
      for (var i = 0; i < data.length; i++) {
        if (path.extname(data[i]) == "." + ext) {
          files.push(data[i]);
        }
      }
      callback(null, files);
    }
  });
};
