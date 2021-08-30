const icecat = require('icecat');
const http = requite('http');

exports.test = async (req, res) => {
// Language: en, GTIN: 4948570114344 (GTIN: EAN, UPC or GTIN-13/JAN)
//const icecatClient = await new icecat('AnaGciaSchz', '8.9nsKS++.m*2fS-');
//https://live.icecat.biz/api/?UserName=AnaGciaSchz&Language=en&icecat_id=1198270
var options = {
    host: 'www.live.icecat.bi',
    path: '/api/?UserName=AnaGciaSchz&Language=en&icecat_id=1198270'
  };
var product = await icecatClient.openCatalog.getProductById('EN', '29900045');
console.log(product);
res.send({title: product.getTitle(), description: product.getLongDescription(), category: product.getCategory(), images: product.getImages()});
}