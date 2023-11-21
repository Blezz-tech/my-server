import { Router } from "express";
import { signupController } from "../controllers/signupController";
import { body } from "express-validator";
import { fastNotEmpty } from "../utils/helper";



const signupRouter = Router();

signupRouter.post("/",
    fastNotEmpty("username"),
    fastNotEmpty("password"),
    signupController.post);

export { signupRouter };
