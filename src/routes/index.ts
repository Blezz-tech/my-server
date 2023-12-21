import { Router } from "express";

const router = Router();

// Подключение подроутеров
import { signupRouter } from "./signupRouter";
import { loginRouter } from "./loginRouter";
import { roomRouter } from "./roomRouter";
import { roomsRouter } from "./roomsRouter";
import { registerRouter } from "./registerRouter"
import { userdataRouter } from "./userdataRouter";
import { usersinroomRouter } from "./usersinroomRouter";
import { hotelRouter } from "./hotelRouter";

// Использование подроутеров
router.use("/signup", signupRouter);
router.use("/login", loginRouter);
router.use("/room", roomRouter);
router.use("/rooms", roomsRouter);
router.use("/register", registerRouter);
router.use("/userdata", userdataRouter);
router.use("/usersinroom", usersinroomRouter);
router.use("/hotel", hotelRouter);
router.use("/", (req, res) => {
   res.send('Hello World!')
})

// Экспорт роутера
export { router };