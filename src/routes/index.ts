import { Router } from 'express';

const router = Router();

// Routers
const signupRouter = require("./signupRouter");
const loginRouter = require("./loginRouter");

// use Routers
router.use("/signup", signupRouter);
router.use("/login", loginRouter);

module.exports = router;