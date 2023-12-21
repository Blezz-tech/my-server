import { Router } from "express";
const hotelRouter = Router();

import { checkAuth } from "../utils/auth";
import { hotelController } from "../controllers/hotelController";
import { body } from "express-validator";
import { checkEmpty } from "../utils/helper";

// Маршрут POST / создает новый отель
hotelRouter.post("/",
   checkAuth,
   [
      body("name").notEmpty(),
      body("number").notEmpty()
   ],
   checkEmpty,
   hotelController.create);

// Маршрут GET / возвращает список всех отелей
hotelRouter.get("/",
   hotelController.getAll);

// Маршрут DELETE /:id удаляет отель по его ID
hotelRouter.delete("/:id",
   hotelController.destroy);

// Экспорт роутера
export { hotelRouter };