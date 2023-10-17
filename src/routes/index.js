const Router = require("express");
const router = new Router();


const signupRouter = require("./signupRouter");

router.use("/blog", signupRouter);

module.exports = router;
