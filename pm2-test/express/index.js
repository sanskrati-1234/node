import express from "express";
const app = express();
app.get("/", (req, res) => {
  res.status(200).send("Api working");
});

app.listen(3000, () => {
  console.log("running");
});

// npx autocannon -c 100 -d 5 -p 10 http://localhost:4200
// npx pm2 start app.js -i max

// npx pm2 stop all

// npx pm2 delete all

// npx pm2 reload all

// npx pm2
