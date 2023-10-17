class SignupController {
  async get(req, res, next) {
    res.send("Blog");
  }
}

module.exports = new SignupController();
