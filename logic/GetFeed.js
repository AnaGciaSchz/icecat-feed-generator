var getData = require("../logic/GetData");
var fw = require ("../inout/FileWriter")

exports.getFeed = async ()=> {
fw.write("[\n");
var id = 78503055;
var firstLine = true;
var i;
for (i = 0; i<10000;i++){
    var data = await getData.getBasicElectronicInformation(id+i);
    if(data.res != "error"){
        if(firstLine){
            fw.write("{\n\"id\":\""+data.id+"\",\n\"EAN\":\""+data.ean+"\",\n\"name\":\""+data.name+
            "\",\n\"description\":\""+
            data.description+"\",\n\"brand\":\""+data.supplier+"\",\n\"category\":\""+
            data.category+"\",\n\"subCategory\":\""+data.subCategory+"\",\n\"pricePerUnit\":\""+
            data.price+"\",\n\"oldPrice\":\""+data.oldPrice+"\",\n\"OSArquitecture\":\""+
            data.OSArquitecture+"\",\n\"height\":\""+data.height+"\",\n\"weight\":\""+
            data.weight+"\",\n\"led\":\""+data.led+"\",\n\"processorFreq\":\""+
            data.processorFreq+"\",\n\"processorModel\":\""+
            data.processorModel+"\",\n\"internalMemory\":\""+data.internalMemory+"\",\n\"bluetooth\":\""+
            data.bluetooth+"\",\n\"power\":\""+data.power+"\",\n\"displayDiag\":\""+data.displayDiag+
            "\",\n\"disponible\":\""+data.disponible+
            "\",\n\"wifi\":\""+data.wifi+
            "\",\n\"ethernetLan\":\""+data.ethernetLan+
            "\",\n\"displayRes\":\""+data.displayRes+
            "\",\n\"hdmiPorts\":\""+data.hdmiPorts+
            "\",\n\"OSInstalled\":\""+data.OSInstalled+
            "\",\n\"pointingDevice\":\""+data.pointingDevice
            +"\",\n\"color\":\""+data.color+"\",\n\"rating\":\""+
            data.rating+"\",\n\"numKeypad\":\""+data.numKeypad+"\",\n\"purpose\":\""
            +data.purpose+"\",\n\"image\":"+data.image+",\n\"language\":\"en\"\n}");
            firstLine = false;
        }else{
            fw.write(",\n{\n\"id\":\""+data.id+"\",\n\"EAN\":\""+data.ean+"\",\n\"name\":\""+data.name+
            "\",\n\"description\":\""+
            data.description+"\",\n\"brand\":\""+data.supplier+"\",\n\"category\":\""+
            data.category+"\",\n\"subCategory\":\""+data.subCategory+"\",\n\"pricePerUnit\":\""+
            data.price+"\",\n\"oldPrice\":\""+data.oldPrice+"\",\n\"OSArquitecture\":\""+
            data.OSArquitecture+"\",\n\"height\":\""+data.height+"\",\n\"weight\":\""+
            data.weight+"\",\n\"led\":\""+data.led+"\",\n\"processorFreq\":\""+
            data.processorFreq+"\",\n\"processorModel\":\""+
            data.processorModel+"\",\n\"internalMemory\":\""+data.internalMemory+"\",\n\"bluetooth\":\""+
            data.bluetooth+"\",\n\"power\":\""+data.power+"\",\n\"displayDiag\":\""+data.displayDiag+
            "\",\n\"disponible\":\""+data.disponible+
            "\",\n\"wifi\":\""+data.wifi+
            "\",\n\"ethernetLan\":\""+data.ethernetLan+
            "\",\n\"displayRes\":\""+data.displayRes+
            "\",\n\"hdmiPorts\":\""+data.hdmiPorts+
            "\",\n\"OSInstalled\":\""+data.OSInstalled+
            "\",\n\"pointingDevice\":\""+data.pointingDevice
            +"\",\n\"color\":\""+data.color+"\",\n\"rating\":\""+
            data.rating+"\",\n\"numKeypad\":\""+data.numKeypad+"\",\n\"purpose\":\""+
            data.purpose+"\",\n\"image\":"+data.image+",\n\"language\":\"en\"\n}");
        }
    }
}
fw.write("\n]");
return "done";
}