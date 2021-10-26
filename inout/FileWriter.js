fs = require('fs');

exports.write = function(product){
    fs.appendFile('IceCatFeed.json', product, function (err) {
        if (err) return console.log(err);
      });
}