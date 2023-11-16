import {insert} from "../db/insert.js"

class SignupController {
  async post(req, res) {
    const { username, password } = req.body;

    insert(username, password);
    res.setHeader("content-type", "application/json");
    res.status(200).send({
      data: {
        message: "Administrator created",
      },
    });
  }
}

export const signupController = new SignupController();