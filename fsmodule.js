const fs = require('fs');
// first parameter will be fileName,
// second will be encodings,
// third will be a callback function
// fs.readFile('file.txt','utf-8', (err,data)=>{
// //     console.log(err,data);
// });
const a = fs.readFileSync('file.txt');
console.log(a.toString());

// first parameter will be fileName,
// second will be data,
// third will be a callback function

fs.writeFile('file2.txt',"This is a data",()=>{
    console.log("Written to the file");
});

//first parameter will be fileName
//second will be data
const b = fs.writeFileSync('file3.txt',"this is file number three");
console.log(b);

console.log("Finished reading file")