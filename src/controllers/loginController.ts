// import { createJWT } from "../utils/jwt.js";
import { admins, jwt_token } from "../services/mulash_db" // Времмено. Пока нету БД
import { Request, Response } from 'express'
import { Users } from "../entity/Users"
import { myDataSource } from "../config"

class LoginController {
  async post(req: Request, res: Response) {
    const { username, password } = req.body;

    res.setHeader("content-type", "application/json");

    // const rows = await db.query(`SELECT username, password FROM users `);
    // const data = helper.emptyOrRows(rows);

    const user = await myDataSource.getRepository(Users).create(req.body)
    console.log(user);

    // Заменить на SQL Запрос
    const isAdminExists = admins
      .map((admin) => username == admin.username && password == admin.password)
      .includes(true);

    if (!isAdminExists) {
      res.status(401).send({
        message: "Unauthorized",
        errors: {
          login: "invalid credentials",
        },
      });
    } else {
      // const jwt_token = createJWT(req.body);

      // Сделать запрост в бд на вставку
      // INSERT INTO jwt_token
      // VALUES (userId, jwt_token)

      res.status(200).send({
        data: {
          token_user: jwt_token,
        },
      });
    }
  }
}

export const loginController = new LoginController();