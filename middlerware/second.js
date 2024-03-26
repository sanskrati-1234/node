const express = require("express");
const app = express();
const PORT = 4000;

// To enable request.body-> Middleware
app.use(express.json());
//app.use(express.urlencoded({ extended: true }));

// Global Middleware - API timeout

app.use((req, res, next) => {
  req.setTimeout(5000, () => {
    const error = new Error("Request Timeout");
    error.status = 408; // Request Timeout
    next(error);
  });
  next();
});

// Error handling middleware
app.use((err, req, res, next) => {
  if (err.status === 408) {
    res.status(408).json({ error: "Request Timeout" });
  } else {
    res.status(err.status || 500).json({ error: err.message });
  }
});

let todos = [];

app.get(
  "/",
  (req, res, aageBadhaDo) => {
    const { user } = req.query;
    console.log({ user });
    if (!["bharat", "anshul"].includes(user)) {
      return res
        .status(400)
        .send({ message: "You are not allowed to see this page" });
    }

    //aageBadhaDo();
  },
  (req, res) => {
    const { user } = req.query;
    return res.send({ message: `Welcome ${user} to the team.` });
  }
);

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
