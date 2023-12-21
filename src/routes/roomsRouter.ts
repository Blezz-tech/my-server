import { Router } from "express";
const roomsRouter = Router();

import { checkAuth } from "../utils/auth";
import { roomController } from "../controllers/roomController";

// Маршрут GET / используется для получения списка всех комнат
roomsRouter.get("/",
    checkAuth,
    roomController.getAll);

// Экспорт роутера
export { roomsRouter };
