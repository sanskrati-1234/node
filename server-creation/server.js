// server creation via node
const http = require("http");

//create a server object:
http
  .createServer(function (req, res) {
    console.log("listing server at 8080");
    res.write("Node server"); //write a response to the client
    res.end(); //end the response
  })
  .listen(8080);

// check on http://localhost:8080

// server creation via express

const express = require("express");
const app = express();

const startServer = () => {
  try {
    app.listen(3000, () => {
      console.log("running at 3000");
    });
  } catch (err) {
    console.log(err);
  }
};

startServer();

// server creation via fastify

const fastify = require("fastify")();

fastify.get("/", async (req, res) => {
  res.code(200).send();
  return { message: "Fastify Get" };
});

fastify.listen({ port: 3001 }, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  // Server is now listening on ${address}
  console.log("listing at 30001");
});
