// import { db } from "../services/db.js"
import { Request, Response } from 'express';

class SignupController {
  async post(req: Request, res: Response) {
    const { username, password }: { username: string; password: string } = req.body;

    // await db.query(
    //   `INSERT INTO users (username, password) VALUES ("${username}", "${password}");`
    // );

    res.setHeader("content-type", "application/json");
    res.status(200).send({
      data: {
        message: "Administrator created",
      },
    });
  }
}

export const signupController = new SignupController();