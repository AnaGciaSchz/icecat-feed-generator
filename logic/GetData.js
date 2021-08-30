const icecat = require('icecat');

exports.getBasicInformation = async (req, res) => {
// Language: en, GTIN: 4948570114344 (GTIN: EAN, UPC or GTIN-13/JAN)
const icecatClient = await new icecat('AnaGciaSchz', '123ana');
var product = await icecatClient.openCatalog.getProductById('EN', '29900045');
//console.log(product);
return {title: product.getTitle(), description: product.getLongDescription().replace(/(<([^>]+)>)/gi, ""), category: product.getCategory(), images: product.getImages()[0]};
}