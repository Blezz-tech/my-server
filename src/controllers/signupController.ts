import { Request, Response } from 'express';
import { db } from '../config';
import { Users } from '../entity/Users';
import { validationResult } from 'express-validator';

class SignupController {
  async post(req: Request, res: Response) {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      console.log(result);
      return res.status(401).send({ errors: result.array() });
    }

    const { username, password } = req.body;

    const isUserExist = await db.getRepository(Users).exist({
      where: {
        "username": username
      }
    });

    if (!isUserExist) {
      res.status(401).json({
        "message": "The given data was invalid",
        "errors": {
          "username": [
            "this username is exist"
          ]
        },
      });
    } else {
      const new_user = await db.getRepository(Users).create({ username, password })
      const results = await db.getRepository(Users).save(new_user)

      res.status(200).send({
        data: {
          message: "Administrator created",
        },
      });
    }
  }
}

export const signupController = new SignupController();