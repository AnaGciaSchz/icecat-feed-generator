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
        //console.log(data);
        if(firstLine){
            fw.write("{\n\"id\":\""+data.id+"\",\n\"name\":\""+data.name+"\",\n\"description\":\""+
            data.description+"\",\n\"brand\":\""+data.supplier+"\",\n\"category\":\""+
            data.category+"\",\n\"subCategory\":\""+data.subCategory+"\",\n\"price\":\""+
            data.price+"\",\n\"image\":"+data.image+",\"language\":\"en\"\n}");
            firstLine = false;
        }else{
        fw.write(",\n{\n\"id\":\""+data.id+"\",\n\"name\":\""+data.name+"\",\n\"description\":\""+
        data.description+"\",\n\"brand\":\""+data.supplier+"\",\n\"category\":\""+
        data.category+"\",\n\"subCategory\":\""+data.subCategory+"\",\n\"price\":\""+
        data.price+"\",\n\"image\":"+data.image+",\"language\":\"en\"\n}");
        }
    }
}
fw.write("\n]");
return "done";
}