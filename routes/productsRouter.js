const Router = require("express");
const router = new Router();
const test = require("../middleware/test");
const productsController = require("../controllers/productsController");

router.get("/", productsController.get, test);
router.get("/:id", productsController.id);

module.exports = router;
