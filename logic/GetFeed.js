var getData = require("../logic/GetData");
var fw = require ("../inout/FileWriter")

exports.getFeed = async ()=> {
fw.write("[\n");
var id = 29900045;
var firstLine = true;
var i;
for (i = 0; i<10000;i++){
    var data = await getData.getBasicElectronicInformation(id+i);
    if(data.res != "error"){
        console.log(data);
        if(!firstLine){
            fw.write(",\n");
        }else{
            firstLine = false;
        }
            fw.write("{\n\"id\":\""+data.id+"\",\n\"EAN\":\""+data.ean+"\",\n\"name\":\""+data.name+"\",\n\"description\":\""+
            data.description+"\",\n\"brand\":\""+data.supplier+"\",\n\"category\":\""+
            data.category+"\",\n\"subCategory\":\""+data.subCategory+"\",\n\"price\":\""+
            data.price+"\",\n\"height\":\""+data.height+"\",\n\"weight\":\""+
            data.weight+"\",\n\"image\":"+data.image+",\n\"language\":\"en\"\n}");
    }
}
fw.write("\n]");
return "done";
}