import express, { response } from "express";
import data from "./data";
const route = express.Router();

route.get("/data/:id",(req,res)=>{
    const id =  parseInt(req.params.id);
    if(id){
        const task = data.find(i=>i.id===id);
        res.status(201).json(task);
    }else{
        res.status(404).send("Not found");
    }
})
route.get("/data",(req,res)=>{
    const { name } = req.query;
    const msg =`hi ${name || "there"}`;
    res.send({msg})
})
// route.get("/data",(req,res)=>{
//     res.status(201).json(data);
// })  

route.post("/data",(req,res)=>{
    let {id,name} = req.body;
    data.push({id,name})
    res.status(200).send("Task added successfully")
})



export default route;