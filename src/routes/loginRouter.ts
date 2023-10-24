import { Router } from 'express';
const loginRouter: Router = Router();

import { loginController } from "../controllers/loginController";
import { validateUser } from '../middleware/validation';

loginRouter.post("/", validateUser, loginController.post);

export { loginRouter };
