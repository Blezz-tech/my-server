import { Router } from 'express';
const loginRouter : Router = Router();

import {loginController} from "../controllers/loginController";

loginRouter.post("/", loginController.post);

export {loginRouter};
