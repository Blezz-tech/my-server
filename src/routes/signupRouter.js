const Router = require("express");
const router = new Router();
const signupController = require("../controllers/signupController");

router.get("/", signupController.get);

module.exports = router;
