import { Request, Response } from 'express'
import { Admins } from "../entity/Admins"
import { db } from "../config"
import { createJWT } from "../utils/jwt";
import { Tokens } from '../entity/Tokens';

// Класс TokenController содержит методы для работы с токенами.
class TokenController {
  // Метод create создает новый токен.
  // Он принимает HTTP-запрос и ответ, извлекает имя пользователя и пароль из тела запроса,
  // проверяет, существует ли пользователь с данным именем и паролем,
  // если пользователь существует, генерирует новый токен, сохраняет его в базе данных и отправляет ответ с новым токеном.
  // Если пользователя не существует, отправляется ответ с сообщением об ошибке.
  async create(req: Request, res: Response) {
    const { username, password } = req.body;

    const isUserExist = await db.getRepository(Admins).exist({
      where: {
        "username": username,
        "password": password
      }
    });

    if (!isUserExist) {
      res.status(401).send({
        message: "Unauthorized",
        errors: {
          login: "invalid credentials"
        },
      });
    } else {
      const jwt_token = createJWT(String((Math.random() * 10000)) + new Date().getTime().toString() + username + new Date().getTime().toString() + password + new Date().getTime().toString());

      const { id } = await db.getRepository(Admins).findOne({
        where: {
          "username": username,
          "password": password
        }
      });

      const new_token = await db.getRepository(Tokens).create({
        admins_id: id,
        token: jwt_token
      });
      const results = await db.getRepository(Tokens).save(new_token);

      res.status(200).send({
        "data": {
          "token_user": jwt_token,
        },
      });
    }
  }
}

// Создаем экземпляр класса TokenController и экспортируем его.
export const tokenController = new TokenController();
