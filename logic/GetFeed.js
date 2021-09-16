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
            fw.write("{\n\"id\":\""+data.id+"\",\n\"EAN\":\""+data.ean+"\",\n\"name\":\""+data.name+"\",\n\"description\":\""+
            data.description+"\",\n\"brand\":\""+data.supplier+"\",\n\"category\":\""+
            data.category+"\",\n\"subCategory\":\""+data.subCategory+"\",\n\"price\":\""+
            data.price+"\",\n\"height\":\""+data.height+"\",\n\"weight\":\""+
            data.weight+"\",\n\"power\":\""+data.power+"\",\n\"color\":\""+data.color+"\",\n\"image\":"+
            data.image+",\n\"language\":\"en\"\n}");
            firstLine = false;
        }else{
            fw.write(",\n{\n\"id\":\""+data.id+"\",\n\"EAN\":\""+data.ean+"\",\n\"name\":\""+data.name+"\",\n\"description\":\""+
            data.description+"\",\n\"brand\":\""+data.supplier+"\",\n\"category\":\""+
            data.category+"\",\n\"subCategory\":\""+data.subCategory+"\",\n\"price\":\""+
            data.price+"\",\n\"height\":\""+data.height+"\",\n\"weight\":\""+
            data.weight+"\",\n\"power\":\""+data.power+"\",\n\"color\":\""+data.color+"\",\n\"image\":"+
            data.image+",\n\"language\":\"en\"\n}");
        }
    }
}
fw.write("\n]");
return "done";
}