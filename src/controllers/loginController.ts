import { Request, Response } from 'express'
import { Users } from "../entity/Users"
import { myDataSource } from "../config"
import { createJWT } from "../utils/jwt";
// import { Tokens } from '../entity/Tokens.js';

class LoginController {
  async post(req: Request, res: Response) {
    const { username, password } = req.body;

    res.setHeader("content-type", "application/json");

    // const rows = await db.query(`SELECT username, password FROM users `);
    // const data = helper.emptyOrRows(rows);

    const user = await myDataSource.getRepository(Users).findBy({
        "username": username
    })
    console.log(user);

    // Заменить на SQL Запрос
    // const isAdminExists = 
    //   .map((user) => username == user.username && password == user.password)
    //   .includes(true);

    if (!false) {
      res.status(401).send({
        message: "Unauthorized",
        errors: {
          login: "invalid credentials",
        },
      })
    } else {
      const jwt_token = createJWT(req);


      // const user_id = await myDataSource.getRepository(Users).findBy({
      //   "username": username
      // })
      // console.log(user_id)

      // const admins = await myDataSource.getRepository(Tokens).find()

      // const jwt_token = createJWT(req.body);

      // Сделать запрост в бд на вставку
      // INSERT INTO jwt_token
      // VALUES (userId, jwt_token)

      res.status(200).send({
        "data": {
          "token_user": jwt_token,
        },
      });
    }
  }
}

export const loginController = new LoginController();