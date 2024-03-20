import fastify from "fastify";
const app = fastify({
    logger:true
})


app.get("/", async (request, reply) => {
    return { message: "Welcome to my first fastify App" };
  });
  
  // Run the server!
  (async () => {
    try {
      await app.listen({ port: 3000 });
    } catch (err) {
        app.log.error(err);
      process.exit(1);
    }
  })();
  