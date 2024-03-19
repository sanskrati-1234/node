const express = require("express");
const app = express();

let todo =[{id:1,name:"Next js"},{id:2,name:"react"}]

app.get("/",(req,res)=>{
     res.send(todo);
})

app.post("/",(req,res)=>{
    console.log(req.body)
});

app.listen(3000,()=>{
    console.log("Server is runing at 3000");
});