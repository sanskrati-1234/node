module.exports.getAllValidator = (req,res,next)=>{
    const {name} =req.query;
    if(!name){
        return res.send({ message: `Welcome ${name} to team` });
    }
    next();
}