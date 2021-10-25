fs = require('fs');

exports.write = function(product){
    fs.appendFile('IceCatFeedV2.json', product, function (err) {
        if (err) return console.log(err);
      });
}