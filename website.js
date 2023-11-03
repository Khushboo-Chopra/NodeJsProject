//creating an http server

// step 1: import http
const http = require('http');
const file = require('fs');

//this is the port where process is already running
const port = process.env.PORT || 3000;

//createServer will take request, response and callback()=>{}
const server = http.createServer((req, res) => {
    console.log(req.url);
    res.setHeader('Content-Type', 'text/html');
    if (req.url == '/') {
        res.statusCode = 200;
        res.end('<h1>This is first Node Js Server</h1> <p> This is the way to rock the world </p>');

    }
    else if (req.url == '/about') {
        res.statusCode = 200;
        res.end('<h1>About Node Js Server</h1> <p> This is about node js</p>');

    }
    else if (req.url == '/hello') {
        res.statusCode = 200;
        const data = file.readFileSync('index.html');
        res.end(data.toString());
    }
    else {
        res.harry();
        res.statusCode = 404;
        res.end('<h1> Not Found </h1> <p> Page was not found on this server ')
    }

})

//listen will take port and a callback ()=>{}
server.listen(port, () => {
    console.log(`Server is listening on  port ${port}`);
});
