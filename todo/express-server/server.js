import express from "express";
import todoRoutes from "./routes.js";
function createServer(){
    try{
        const app= express();
        app.use(express.json());
        app.use("/todo",todoRoutes);
        app.listen(3000,()=>{
            console.log("port 3000");
        })
    }catch(err){
        console.log("error",err);
    }
}

createServer();
