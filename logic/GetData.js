const icecat = require('icecat');
var uniqid = require('uniqid'); 
const random = require('random');

exports.getBasicElectronicInformation = async (id) => {
try{
const icecatClient = await new icecat('AnaGciaSchz', '123ana');
var product = await icecatClient.openCatalog.getProductById('EN', id);
if(isElectronic(product.getCategory())){
return {res: "ok",id: uniqid(), name: getName(product.getTitle()), supplier: product.getSupplier(), category: "Electronics", subCategory: product.getCategory(), 
price: getPrice(product.getCategory()),image: getImages(product.getImages())};
}
else{
    return {res: "error"}
}
}
catch(err){
    return {res: "error"}
}
}

function getName (name){
    var rep = '\\'
    var place = rep+'"'
    return name.replaceAll('"',place);
}

function getImages (images){
    var i = 0;
    var result ="[\n" ;
    for (i;i<images.length;i++){
        result+= "{\n\"HighImg\":\""+ images[i].HighImg+"\",\n \"LowImg\":\""+ images[i].LowImg+"\",\n \"ThumbImg\":\""+ images[i].ThumbImg+"\"}";
        if(i+1 != images.length){
            result+=",\n";
        }
    }
    result+="\n]";
    return result;
}

function isElectronic(category){
    console.log(category);
    var categories = ["Computer Monitors","Computers & Peripherals","Computers",
        "Warranty & Support","Warranty & Support Extensions","Infotainment",
        "Telecom & Navigation","Notebooks","Telecommunication Equipment Accessories",
        "Mobile Communication Device Parts & Accessories","Notebook Parts & Accessories",
        "All-in-One PCs/Workstations","Notebook Spare Parts", "Computer Cables",
        "Computer Components","Audio Visual Equipment","Electrical Equipment & Supplies",
         "Data Storage","NAS & Storage Servers","Tablets","Laser Printers","PCs/Workstations",
        "Touch Screen Monitors","Notebook Spare Parts","Network Switches","Servers","Smoke Detectors",
        "Water Detectors","Alarm Lighting", "Graphics Cards","Power Supply Units", "POS Printers",
        "Internal Hard Drives", "Keyboards", "Smartphones"]
    return categories.includes(category);
}

function getPrice(category){
    var categoryExpensive = ["Computer Monitors","Computers & Peripherals","Computers",
    "Notebooks","All-in-One PCs/Workstations", "Audio Visual Equipment","Tablets","Laser Printers","PCs/Workstations",
        "Touch Screen Monitors","Servers", "POS Printers"]
   if(categoryExpensive.includes(category)){
       return random.int((min = 300), (max = 1000))+"$";
   }else{
    return random.int((min = 100), (max = 500))+"$";
   }
}