import { Router } from "express";
import { signin } from "./signin.controller.js";

const signInRoute = Router();
signInRoute.get("/",signin);

export default  signInRoute;