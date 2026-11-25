import http from "http";

const server = http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/html"});
    res.end("<h1>Welcome to node js Server</h1>");
})

server.listen(3000,()=>{
    console.log("Server is running on port 3000");
});