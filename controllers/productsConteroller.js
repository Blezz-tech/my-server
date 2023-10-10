class ProductsController {
  async get(req, res, next) {
    const text = next();
    res.send("asd");
    // res.json({products});
  }

  async id(req, res, next) {
    const products = ["Apple", "Pen", "Computer"];
    if (products[req.params.id]) {
      res.send(products[req.params.id]);
    } else {
      res.status(404).send("Product not found");
    }
  }
}

module.exports = new ProductsController();
