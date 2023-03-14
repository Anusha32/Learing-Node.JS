const fs = require("fs");
//CREATE DATA AND FILE
fs.writeFile('read1.txt','goodnight',(err)=>{
    console.log('file is created');
    console.log(err);
});

//TO UPDATE DATA
fs.appendFile("read1.txt"," sweet dreams", (err) => {
    console.log("data updated in read1.txt file")
});

//TO READ DATA
fs.readFile("read1.txt","UTF-8", (err, data) => {
    console.log(data);
});