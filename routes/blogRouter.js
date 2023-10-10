const Router = require("express");
const router = new Router();
const blogController = require("../controllers/blogController");

router.get("/", blogController.get);

module.exports = router;
