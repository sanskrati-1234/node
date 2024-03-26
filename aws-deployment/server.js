const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

app.get("/",(req,res)=>{
     res.status(200).send("Get all data");
})

app.listen(3000,()=>{
    console.log("listen 3000  port")
})