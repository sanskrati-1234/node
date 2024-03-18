const http = require("node:http");
const hostname = "localhost"; // loopback ip or localhost
const port = 3000; // Common development port, max valid port is 65535
const url = require("url");


const server = http.createServer(async(req, res) => {
    try {
      const receivedUrl = url.parse(req.url, true);
      console.log(receivedUrl, "r");
      if(receivedUrl.pathname === "/products"){
        let data = await fetch("https://fakestoreapi.com/products")
        if(!data.ok){
            throw new Error("Data is not correct")
        }
        
        let sendData = await data.text();
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(sendData);
        
      }else if (receivedUrl.pathname === "/greetings") {
        const queryName = receivedUrl.query.name;
        if (queryName) {
          res.writeHead(200, { "Content-Type": "text/plain" });
          res.end(`Hello ${queryName}`);
        } else {
          res.writeHead(200, { "Content-Type": "text/plain" });
          res.end(`Hello there`);
        }
      }else {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(`Node server running`);
      }
    } catch (err) {
      console.log(err);
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end(`Internal Server Error`);
    }
 });

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
})