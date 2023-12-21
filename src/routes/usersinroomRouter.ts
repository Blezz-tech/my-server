import { Router } from "express";
const usersinroomRouter = Router();

import { checkAuth } from "../utils/auth";
import { clientController } from "../controllers/clientController";

// Маршрут GET / используется для получения списка пользователей в комнатах
usersinroomRouter.get("/",
    checkAuth,
    clientController.showInRooms);

// Экспорт роутера
export { usersinroomRouter };

