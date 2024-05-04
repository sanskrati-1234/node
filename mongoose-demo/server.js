import { Express } from "express";

const app = Express();
app.use(Express.json());
app.listen(3000, () => {
  console.log("running at 3000");
});
