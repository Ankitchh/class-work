const http = require('http');
const fs = require('fs');
var port= 3000;

const server = http.createServer((req , res)=>{
    res.writeHead(200, 'content-type','text/html');
    var readStream = fs.createReadStream('index.html');
    readStream.pipe(res);
}).listen(port, ()=>{
    console.log(`server is listening on port ${port}`);
});

