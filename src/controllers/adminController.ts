import { Request, Response } from 'express';
import { db } from '../config';
import { Admins } from '../entity/Admins';

// Класс AdminController содержит методы для работы с администраторами.
class AdminController {
  // Метод create создает нового администратора.
  // Он принимает HTTP-запрос и ответ, извлекает имя пользователя и пароль из тела запроса,
  // создает нового администратора с этими данными, сохраняет его в базе данных и отправляет ответ с сообщением о том, что администратор был успешно создан.
  async create(req: Request, res: Response) {
    const { username, password } = req.body;

    const new_user = await db.getRepository(Admins).create({ username, password })
    const results = await db.getRepository(Admins).save(new_user)

    res.status(200).send({
      data: {
        message: "Administrator created",
      },
    });
  }

}

// Создаем экземпляр класса AdminController и экспортируем его.
export const adminController = new AdminController();