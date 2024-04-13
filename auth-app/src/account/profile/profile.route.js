import { Router } from "express";
import { getUserDetails } from "./profile.controller.js";

const userDetailRoute = Router();

userDetailRoute.post("/",getUserDetails);

export default userDetailRoute;