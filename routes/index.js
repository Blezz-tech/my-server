const Router = require("express");
const router = new Router();



const blogRouter = require("./blogRouter");
const productsRouter = require("./productsRouter");
const downloadBooks = require("./downloadBooksRouter");

router.use("/blog", blogRouter);
router.use("/products", productsRouter);
router.use("/downloadBooks", downloadBooks);

router.get("/", (req, res, next) => {
  res.send("Its working");
});

module.exports = router;
