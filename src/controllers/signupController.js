import { db } from "../services/db.js"

class SignupController {
  async post(req, res) {
    const { username, password } = req.body;

    await db.query(
      `INSERT INTO users (username, password) VALUES ("${username}", "${password}");`
    );

    res.setHeader("content-type", "application/json");
    res.status(200).send({
      data: {
        message: "Administrator created",
      },
    });
  }
}

export const signupController = new SignupController();