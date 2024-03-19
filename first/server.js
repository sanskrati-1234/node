const http = require("http");

const server =http.createServer((req,res)=>{
    const {url} = req;
    if(url==="/"){
        res.writeHead(200,{ "Content-Type": "application/json" })
        res.end("base url")  
    }else if (url ==="/greeting"){
        res.writeHead(200,{ "Content-Type": "application/json" })
        res.end("greeting")
    }
    res.end("Unknow request")
})

server.listen("3000",()=>{
    console.log("app is running on 3000")
})