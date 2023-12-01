import { Router } from "express";

const router = Router();

// Routers
import { signupRouter } from "./signupRouter";
import { loginRouter } from "./loginRouter";
import { roomRouter } from "./roomRouter";
import { roomsRouter } from "./roomsRouter";
import { registerRouter } from "./registerRouter"

// use Routers
router.use("/signup", signupRouter);
router.use("/login", loginRouter);
router.use("/room", roomRouter);
router.use("/rooms", roomsRouter);
router.use("/register", registerRouter);
router.use("/", (req, res) => {
    res.send('Hello World!')
})

export { router };
