fs = require('fs');

exports.write = function(product){
    fs.appendFile('IceCatFeed.txt', product, function (err) {
        if (err) return console.log(err);
      });
}