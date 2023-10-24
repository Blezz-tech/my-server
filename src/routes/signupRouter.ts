import { Router } from 'express';
const signupRouter: Router = Router();

import { signupController } from "../controllers/signupController";
import { validateUser } from '../middleware/validation';

signupRouter.post("/", validateUser, signupController.post);

export { signupRouter };
