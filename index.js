const http  = require('http');
const port = 3000;
const hostname = '127.0.0.1'

const server = http.createServer((req,res)=>{
    res.writeHead(202,{'Content-type':'text/html'})
    res.write('<h1>my hobbis i am a webdeveloper</h1>');
    res.end()
});

server.listen(port,hostname,()=>{
    console.log(`your server is ranning http://${hostname}:${port}`)
})