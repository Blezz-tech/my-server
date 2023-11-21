import { Request, Response } from 'express';
import { myDataSource } from '../config';
import { Users } from '../entity/Users';

class SignupController {
  async post(req: Request, res: Response) {
    const { username, password }: { username: string; password: string } = req.body;

    const user = await myDataSource.getRepository(Users).create({username, password})
    const results = await myDataSource.getRepository(Users).save(user)
    
    // Добавить проверку на уникальность

    res.setHeader("content-type", "application/json");
    res.status(200).send({
      data: {
        message: "Administrator created",
      },
    });
  }
}

export const signupController = new SignupController();