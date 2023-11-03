//creating an http server

// step 1: import http
const http = require('http');

//this is the port where process is already running
const port = process.env.PORT || 3000;

//createServer will take request, response and callback()=>{}
const server = http.createServer((req,res)=>{
    console.log(req.url);
res.statusCode = 200;
res.setHeader('Content-Type','text/html');
res.end('<h1>This is first Node Js Server</h1> <p> This is the way to rock the world </p>');
})

//listen will take port and a callback ()=>{}
server.listen(port , ()=> {
    console.log(`Server is listening on  port ${port}`);
});
