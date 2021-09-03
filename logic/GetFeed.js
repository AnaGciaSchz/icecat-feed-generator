var getData = require("../logic/GetData");
var fw = require ("../inout/FileWriter")

exports.getFeed = async ()=> {
fw.write("[\n");
var id = 29900045;
var firstLine = true;
var i;
for (i = 0; i<10000;i++){
    var data = await getData.getBasicInformation(id+i);
    if(data.res != "error"){
        console.log(data);
        var rep = '\\'
        var place = rep+'"'
        var name = data.name.replaceAll('"',place);
        if(firstLine){
            fw.write("{\n\"id\":\""+id+i+"\",\n\"name\":\""+name+"\",\n\"brand\":\""+data.supplier+"\",\n\"category\":\""+data.category+"\",\n\"image\":\""+data.image+"\"\n}");
            firstLine = false;
        }else{
        fw.write(",\n{\n\"id\":\""+id+i+"\",\n\"name\":\""+name+"\",\n\"brand\":\""+data.supplier+"\",\n\"category\":\""+data.category+"\",\n\"image\":\""+data.image+"\"\n}");
        }
    }
}
fw.write("\n]");
return "done";
}