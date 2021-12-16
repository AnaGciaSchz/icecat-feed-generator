fs = require('fs');

exports.write = function(product){
    fs.appendFile('IceCatFeed16.json', product, function (err) {
        if (err) return console.log(err);
      });
}