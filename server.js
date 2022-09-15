/*const http = require('http');
http.createServer((req,res)=>{
    res.writeHead(200,{
        "Content-Type":'text/plain'
    });
    res.end('Hello beautiful monkies!! fammnn');
}).listen(3000);

console.log('sever running on port 3000');*/

const connect = require('connect');
const app=connect();
app.listen(3000);