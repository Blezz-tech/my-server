import { Express, Request, Response } from 'express';

class SignupController {
  async post(req: Request, res: Response) {
    const { username, password }: { username: string; password: string } = req.body;

    res.setHeader('content-type', 'application/json');

    if (!username && !password) {
      res.status(401);
      res.send(({
        "message": "The given data was invalid.",
        "errors": {
          "username": [
            "The username field is required."
          ],
          "password": [
            "The password field is required."
          ]
        }
      }));
    } else if (!username) {
      res.status(401);
      res.send(({
        "message": "The given data was invalid.",
        "errors": {
          "username": [
            "The username field is required."
          ]
        }
      }));
    } else if (!password) {
      res.status(401);
      res.send(({
        "message": "The given data was invalid.",
        "errors": {
          "password": [
            "The password field is required."
          ]
        }
      }));

    } else {
      // Добавить функцию вставки в базу данных администратора
      res.status(200);
      res.send(({
        "data": {
          "message": "Administrator created"
        }
      }));

    }
  }
}

export const signupController = new SignupController();

// const signupController = new SignupController();
// export { signupController };