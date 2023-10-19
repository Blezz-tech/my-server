import { Router } from 'express';

const router : Router = Router();

// Routers
import {signupRouter} from "./signupRouter";
import {loginRouter} from "./loginRouter";

// use Routers
router.use("/signup", signupRouter);
router.use("/login", loginRouter);

export {router};