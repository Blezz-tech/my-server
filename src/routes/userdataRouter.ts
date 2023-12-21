import { Router } from "express";
const userdataRouter = Router();

import { checkAuth } from "../utils/auth";
import { clientController } from "../controllers/clientController";

// Маршрут PATCH /:id используется для обновления данных пользователя
userdataRouter.patch("/:id",
    checkAuth,
    clientController.update);

// Маршрут DELETE /:id используется для удаления данных пользователя
userdataRouter.delete("/:id",
    clientController.destroy);

// Экспорт роутера
export { userdataRouter };
