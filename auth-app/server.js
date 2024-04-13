import Express from "express";
import signInRoute from "./src/account/signin/signin.route.js";
import userDetailRoute from "./src/account/profile/profile.route.js";


const app = Express();

app.use(Express.json());
app.use("/signin",signInRoute);
app.use("/userDetail",userDetailRoute)


app.listen(3000,()=>{
    console.log("running at 3000");
})