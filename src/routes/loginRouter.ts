import { Router } from "express";
import { body } from "express-validator";

const loginRouter = Router();

import { checkEmpty } from "../utils/helper.js";
import { tokenController } from "../controllers/tokenController.js";

// Маршрут POST / используется для входа в систему
loginRouter.post("/",
  [
    body("username").notEmpty(),
    body("password").notEmpty()
  ],
  checkEmpty,
  tokenController.create);

// Экспорт роутера
export { loginRouter };
