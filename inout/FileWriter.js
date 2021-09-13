fs = require('fs');

exports.write = function(product){
    fs.appendFile('temp.json', product, function (err) {
        if (err) return console.log(err);
      });
}