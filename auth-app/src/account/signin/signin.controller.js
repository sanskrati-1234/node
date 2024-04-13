import jwt from "jsonwebtoken";

export  const profile ={
    id:"123",
    email:"sanskratiagrawal306@gmail.com",
    password:"abc",
    name:"Sanskrati"
}

export  const signin = (req,res)=>{
    const {email,password} = req.body;
    if(email !== profile.email || password!==profile.password){
        return res.status(401).send({
            data:{},
            meta:{
                message : "wrong info"
            }
        })
    }
    const token = jwt.sign({id:profile.id},"Sanskrati");
    return res.status(200).send({data:{
        token:token
    },meta:{
        message:"You're logged in"
    }})
}