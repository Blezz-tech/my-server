import { Request, Response } from 'express';
import { myDataSource } from '../config';
import { Users } from '../entity/Users';

class SignupController {
  async post(req: Request, res: Response) {
    const { username, password } = req.body;

    const isUserExist = await myDataSource.getRepository(Users).exist({
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
      const new_user = await myDataSource.getRepository(Users).create({ username, password })
      const results = await myDataSource.getRepository(Users).save(new_user)

      res.status(200).send({
        data: {
          message: "Administrator created",
        },
      });
    }
  }
}

export const signupController = new SignupController();