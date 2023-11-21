import { Router } from "express";
const loginRouter = Router();

import { loginController } from "../controllers/loginController.js";
// import { validate } from "../utils/validate.js";

loginRouter.post("/", loginController.post);

export { loginRouter };
