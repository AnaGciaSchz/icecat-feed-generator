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
        if(firstLine){
            fw.write("{\nname:"+data.name+",\nbrand:"+data.supplier+",\ncategory:"+data.category+",\nimage:"+data.image+"\n}");
            firstLine = false;
        }else{
        fw.write(",\n{\nname:"+data.name+",\nbrand:"+data.supplier+",\ncategory:"+data.category+",\nimage:"+data.image+"\n}");
        }
    }
}
fw.write("\n]");
return "done";
}