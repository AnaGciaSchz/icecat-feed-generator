var getData = require("../logic/GetData");
var fw = require ("../inout/FileWriter")

exports.getFeed = async ()=> {
fw.write("Name\tSupplier\tCategory\tImages\n");
var id = 93126412;
var i;
for (i = 0; i<10000;i++){
    var data = await getData.getBasicInformation(id+i);
    if(data.res != "error"){
        console.log(data);
        fw.write(data.name+"\t"+data.supplier+"\t"+data.category+"\t"+data.image+"\n");
    }
}
return "done";
}