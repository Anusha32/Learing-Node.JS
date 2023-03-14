const fs = require("fs");

//FOR SYNCHRONUS FILE READING
// const data = fs.readFileSync('read1.txt','utf-8');
// console.log(data);
// console.log("after the data");

//FOR ASYNCHRONUS FILE READING
const value = fs.readFile('read1.txt','utf-8',(err, data) =>{
    console.log(data);
});
console.log('after data');