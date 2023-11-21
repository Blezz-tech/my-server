import { Router } from "express";
const roomRouter = Router();

import { roomController } from "../controllers/roomController";
// import { validate } from "../utils/validate.js";

// Нужна валидация Bearer token'а
roomRouter.post("/", roomController.post);
// Нужна валидация Bearer token'а
roomRouter.delete("/*", roomController.delete)

export { roomRouter };
