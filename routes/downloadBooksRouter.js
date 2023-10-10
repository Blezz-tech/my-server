const Router = require("express");
const router = new Router();
const downloadBooksController = require("../controllers/downloadBooksController");

router.get("/downloadBooks", downloadBooksController.get);

module.exports = router;
