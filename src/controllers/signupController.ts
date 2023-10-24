import { Request, Response } from 'express';

class SignupController {
  async post(req: Request, res: Response) {
    const { username, password }: { username: string; password: string } = req.body;

    res.setHeader('content-type', 'application/json');
    // Добавить функцию вставки в базу данных администратора
    res.status(200);
    res.send(({
      "data": {
        "message": "Administrator created"
      }
    }));
  }
}

export const signupController = new SignupController();

// const signupController = new SignupController();
// export { signupController };