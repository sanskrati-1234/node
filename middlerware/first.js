//fresher level middleware logic
const express = require("express");
const app = express();
const PORT = 4000;

// To enable request.body-> Middleware
app.use(express.json());
//app.use(express.urlencoded({ extended: true }));

let todos = [];

app.post("/todos", (req, res) => {
  console.log("Body: ", req.body);
  const { title } = req.body;
  if (!title) {
    return res.status(400).send({ message: "Please enter title first" });
  }
  res.send({ message: "Welcome to todos" });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});       
