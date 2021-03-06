const icecat = require('icecat');
var uniqid = require('uniqid'); 
const random = require('random');

exports.getBasicElectronicInformation = async (id) => {
try{
const icecatClient = await new icecat('AnaGciaSchz', '123ana');
var product = await icecatClient.openCatalog.getProductById('EN', id);
if(isElectronic(product.getCategory()) && product.getImages().length>0){
    var eanValue = 0;
    try{
    var eanValue = product.getEan();
    } 
    catch(err){

    }
    var priceNew = getPrice(product.getCategory())
    var priceOld = "";
    if(random.int((min = 1), (max = 100))>85){
        priceOld = random.int((min = priceNew+50), (max = priceNew+200));
    }

return {res: "ok",id: uniqid(),ean: eanValue, name: quitQuotationMarks(product.getTitle()), 
supplier: product.getSupplier(), category: "Electronics", subCategory: product.getCategory(), 
price: priceNew, displayDiag: getDisplayDiagonal(product),numKeypad: getNumericKeypad(product),
oldPrice : priceOld,purpose: getPurpose(product), description: getDescription(product), 
height: getHeight(product),weight: getWeight(product),OSInstalled: getOperatingSystemInstalled(product),
processorFreq: getProcessorFrequency(product),led: getLED(product), displayRes: getDisplayResolution(product),
disponible: getDisponibility(),hdmiPorts: getHDMIPorts(product), wifi: getWifi(product),
processorModel: getProcessorModel(product),internalMemory: getInternalMemory(product), ethernetLan: getLAN(product),
pointingDevice: getPointingDevice(product), bluetooth: getBluetooth(product),
power: getPower(product), OSArquitecture: getOperatingsSystemArchitecture(product),
color: getColour(product), familyColor:getFamilyColour(product), rating: random.int((min = 1), (max = 5)), 
image: getImages(product.getImages())};
}
else{
    return {res: "error"}
}
}
catch(err){
    return {res: "error"}
}
}

function quitQuotationMarks (string){
    var rep = '\\'
    var place = rep+'"'
    return string.replaceAll('"',place);
}

function getDisponibility(){
    var probability= random.int((min = 40), (max = 100));
    return probability>50?"Yes":"No";
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
    var categories = ["Computer Monitors","TVs","Computers & Peripherals","Computers",
        "Infotainment","Telecom & Navigation","Notebooks","Telecommunication Equipment Accessories",
        "Mobile Communication Device Parts & Accessories","Notebook Parts & Accessories",
        "All-in-One PCs/Workstations","Notebook Spare Parts", "Computer Cables",
        "Computer Components","Audio Visual Equipment","Electrical Equipment & Supplies",
         "Data Storage","NAS & Storage Servers","Tablets","Laser Printers","PCs/Workstations",
        "Touch Screen Monitors","Notebook Spare Parts","Network Switches","Servers","Smoke Detectors",
        "Water Detectors","Alarm Lighting", "Graphics Cards","Power Supply Units", "POS Printers",
        "Internal Hard Drives", "Keyboards", "Smartphones", "Telephones", "Game Consoles", "Mobile Phones",
        "Thin Clients", "Portable Speakers", "External Hard Drives", "Projection Screens", "Networking Cables",
        "Power Cables", "Home Audio Systems", "Soundbar Speakers", "Smartwatches", "Headphones & Headsets"]
    return categories.includes(category);
}

function getPrice(category){
    var categoryExpensive = ["Computer Monitors","Computers & Peripherals","Computers",
    "Notebooks","All-in-One PCs/Workstations", "Audio Visual Equipment","Tablets","Laser Printers","PCs/Workstations",
        "Touch Screen Monitors","Servers", "POS Printers"]
   if(categoryExpensive.includes(category)){
       return random.int((min = 300), (max = 1000));
   }else{
    return random.int((min = 100), (max = 500));
   }
}

function getDescription(product){
    var description = product.getShortDescription();
    if(description==undefined){
        return quitQuotationMarks(product.getLongDescription().replace(/(<([^>]+)>)/gi, "").replaceAll("\n",""));
    }
    return quitQuotationMarks(description.toString().replace(/(<([^>]+)>)/gi, "").replaceAll("\n",""));
}

function getHeight(product){
    var specifications = product.getSpecifications();
    var i = 0;
    for(i;i<specifications.length;i++){
        if(specifications[i].name.includes("Height") && specifications[i].name !== "Height adjustment" ){
            return specifications[i].value;
        }
    }
    return 0;
}

function getWeight(product){
    var specifications = product.getSpecifications();
    var i = 0;
    for(i;i<specifications.length;i++){
        if(specifications[i].name.includes("Weight")){
            return specifications[i].value;
        }
    }
    return 0;
}

function getOperatingsSystemArchitecture(product){
    var specifications = product.getSpecifications();
    var i = 0;
    for(i;i<specifications.length;i++){
        if(specifications[i].name.includes("Operating system architecture")){
            return specifications[i].value;
        }
    }
    return "";
}

function getPointingDevice(product){
    var specifications = product.getSpecifications();
    var i = 0;
    for(i;i<specifications.length;i++){
        if(specifications[i].name.includes("Pointing device")){
            return specifications[i].value;
        }
    }
    return "";
}

function getBluetooth(product){
    var specifications = product.getSpecifications();
    var i = 0;
    for(i;i<specifications.length;i++){
        if(specifications[i].name.includes("Bluetooth")){
            var result = specifications[i].value;
            if(result =="Y"){
                return "Yes"
            }
            else if(result == "N"){
                return "No"
            }
        }
    }
    return "";
}

function getInternalMemory(product){
    var specifications = product.getSpecifications();
    var i = 0;
    for(i;i<specifications.length;i++){
        if(specifications[i].name.includes("Internal memory")){
            return specifications[i].value;
        }
    }
    return 0;
}

function getProcessorModel(product){
    var specifications = product.getSpecifications();
    var i = 0;
    for(i;i<specifications.length;i++){
        if(specifications[i].name.includes("Processor model")){
            return specifications[i].value;
        }
    }
    return "";
}

function getPurpose(product){
    var specifications = product.getSpecifications();
    var i = 0;
    for(i;i<specifications.length;i++){
        if(specifications[i].name.includes("Purpose")){
            return specifications[i].value;
        }
    }
    return "";
}

function getNumericKeypad(product){
    var specifications = product.getSpecifications();
    var i = 0;
    for(i;i<specifications.length;i++){
        if(specifications[i].name.includes("Numeric keypad")){
            var result = specifications[i].value;
            if(result =="Y"){
                return "Yes"
            }
            else if(result == "N"){
                return "No"
            }
        }
    }
    return "";
}
function getLED(product){
    var specifications = product.getSpecifications();
    var i = 0;
    for(i;i<specifications.length;i++){
        if(specifications[i].name.includes("LED")){
            var result = specifications[i].value;
            if(result =="Y"){
                return "Yes"
            }
            else if(result == "N"){
                return "No"
            }
        }
    }
    return "";
}

function getProcessorFrequency(product){
    var specifications = product.getSpecifications();
    var i = 0;
    for(i;i<specifications.length;i++){
        if(specifications[i].name.includes("Processor frequency")){
            return specifications[i].value;
        }
    }
    return 0;
}

function getDisplayDiagonal(product){
    var specifications = product.getSpecifications();
    var i = 0;
    for(i;i<specifications.length;i++){
        if(specifications[i].name.includes("Display diagonal")){
            return specifications[i].value;
        }
    }
    return 0;
}

function getOperatingSystemInstalled(product){
    var specifications = product.getSpecifications();
    var i = 0;
    for(i;i<specifications.length;i++){
        if(specifications[i].name.includes("Operating system installed")){
            var result = specifications[i].value;
            if(result =="Y"){
                return "Yes"
            }
            else if(result == "N"){
                return "No"
            }
        }
    }
    return "";
}

function getLAN(product){
    var specifications = product.getSpecifications();
    var i = 0;
    for(i;i<specifications.length;i++){
        if(specifications[i].name.includes("Ethernet LAN")){
            var result = specifications[i].value;
            if(result =="Y"){
                return "Yes"
            }
            else if(result == "N"){
                return "No"
            }
        }
    }
    return "";
}

function getWifi(product){
    var specifications = product.getSpecifications();
    var i = 0;
    for(i;i<specifications.length;i++){
        if(specifications[i].name.includes("Wi-Fi")){
            var result = specifications[i].value;
            if(result =="Y"){
                return "Yes"
            }
            else if(result == "N"){
                return "No"
            }
        }
    }
    return "";
}

function getDisplayResolution(product){
    var specifications = product.getSpecifications();
    var i = 0;
    for(i;i<specifications.length;i++){
        if(specifications[i].name.includes("Display resolution")){
            return specifications[i].value;
        }
    }
    return "";
}

function getHDMIPorts(product){
    var specifications = product.getSpecifications();
    var i = 0;
    for(i;i<specifications.length;i++){
        if(specifications[i].name.includes("HDMI ports quantity")){
            return specifications[i].value;
        }
    }
    return 0;
}

function getPower(product){
    var specifications = product.getSpecifications();
    var i = 0;
    for(i;i<specifications.length;i++){
        if(specifications[i].name.includes("Power consumption")){
            return specifications[i].value;
        }
    }
    return 0;
}

function getPrimaryColor (color){
 if(color == "stainless steel" || color == "metallic" || color == "platinum"){
     return "silver";
 }

 if(color == "lilac" || color == "lavender"){
     return "violet";
 }

 if (color == "aluminium"){
     return "grey";
 }

 if( color == "chocolate" || color == "copper colour"){
     return "brown";
 }

 if(color == "burgundy"){
     return "red";
 }

 if (color == "charcoal"){
     return "black"
 }

 if(color == "coral"){
     return "pink"
 }

 if(color == "navy"){
     return "blue"
 }
return color;
}

function getValidColor (color){
    var colors = ["black","silver","grey","white","red","blue","pink","green","gold","brown","yellow","purple",
    "violet"]
    var finalColor = colors.includes(color)?color: "";
    if(finalColor==""){
        console.log(color)
    }
    return finalColor;
}

function getFamilyColour (product){
    var specifications = product.getSpecifications();
    var i = 0;
    for(i;i<specifications.length;i++){
        if(specifications[i].name.includes("Product colour")){
            var colors = specifications[i].value.split(",");
            var validColors = []
            for(i = 0; i<colors.length;i++){
                validColors[i] = getValidColor(getPrimaryColor(colors[i].toLowerCase()))
            }
            if(validColors.length>1){
            var result ="[\n" ;
            for(i=0;i<validColors.length;i++){
                    result+= "\""+ validColors[i]+"\"";
                if(i+1 != validColors.length){
                    result+=",\n";
                }
            }
            result+="\n]";
            return result;
            }
            return "\""+validColors[0]+"\"";
        }
    }
    return "\"\"";
}

function getColour(product){
    var specifications = product.getSpecifications();
    var i = 0;
    for(i;i<specifications.length;i++){
        if(specifications[i].name.includes("Product colour")){
            var colors = specifications[i].value.toLowerCase().split(",");
            if(colors.length>1){
                var result ="[\n" ;
                for(i=0;i<colors.length;i++){
                        result+= "\""+ colors[i]+"\"";
                    if(i+1 != colors.length){
                        result+=",\n";
                    }
                }
                result+="\n]";
                return result;
                }
                return "\""+colors[0]+"\"";
        }
    }
    return "\"\"";
}