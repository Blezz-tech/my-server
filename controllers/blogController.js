class BlogController {
  async get(req, res, next) {
    // res.redirect(301, "/");
    res.send("Blog");
  }
}

module.exports = new BlogController();
