import jwt from  "jsonwebtoken";
export const getUserDetails =(req,res)=>{
    const {authorization} = req.headers;
    let user = null;
    try{
        user= jwt.verify(authorization,"Sanskrati");
    }catch (err) {
        user = { message: "Invalid Token" };
      }

    return res.send({message: authorization, user})
}