const icecat = require('icecat');

exports.getBasicInformation = async (id) => {
try{
// Language: en, GTIN: 4948570114344 (GTIN: EAN, UPC or GTIN-13/JAN)
const icecatClient = await new icecat('AnaGciaSchz', '123ana');
var product = await icecatClient.openCatalog.getProductById('EN', id);
return {res: "ok",name: product.getTitle(), supplier: product.getSupplier(), category: product.getCategory(), image: product.getImages()[0].HighImg};
}
catch(err){
    return {res: "error"}
}
}