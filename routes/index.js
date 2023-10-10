const Router = require("express");
const router = new Router();

// const deviceRouter = require("./deviceRouter");
// const userRouter = require("./userRouter");
// const brandRouter = require("./brandRouter");
// const typeRouter = require("./typeRouter");

// router.use("/user", userRouter);
// router.use("/user", userRouter);
// router.use("/type", typeRouter);
// router.use("/brand", brandRouter);
// router.use("/device", deviceRouter);

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
