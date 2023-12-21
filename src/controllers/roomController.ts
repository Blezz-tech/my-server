import { Request, Response } from 'express';
import { db } from '../config';
import { Rooms } from '../entity/Rooms';

// Класс RoomController содержит методы для работы с комнатами.
class RoomController {
  // Метод create создает новую комнату.
  // Он принимает HTTP-запрос и ответ, извлекает данные комнаты из тела запроса,
  // создает новую комнату с этими данными, сохраняет ее в базе данных и отправляет ответ с сообщением о том, что комната была успешно создана.
  async create(req: Request, res: Response) {
    const { name, desc_data } = req.body;

    const new_room = await db.getRepository(Rooms).create({
      "name": name,
      "desc_data": desc_data
    });
    const results = await db.getRepository(Rooms).save(new_room);

    res.status(200).send({
      data: {
        message: "Created",
      },
    });
  }

  // Метод destroy удаляет комнату по ее ID.
  // Если комната существует, она удаляется из базы данных и отправляется ответ с сообщением о том, что комната была успешно удалена.
  // Если комнаты не существует, отправляется ответ с сообщением об ошибке.
  async destroy(req: Request, res: Response) {
    const id: any = req.params.id;

    const isRoomExist = await db.getRepository(Rooms).exist({
      where: {
        "id": id
      }
    });

    if (!isRoomExist) {
      return res.status(403).json({
        "error": {
          "message": "Not found"
        }
      });
    }

    const result = await db.getRepository(Rooms).delete(id);

    res.send({
      "data": {
        "message": "Deleted"
      }
    });
  }

  // Метод getAll возвращает список всех комнат.
  async getAll(req: Request, res: Response) {
    const list_rooms = await db.getRepository(Rooms).find({
      select: ["name", "desc_data"]
    });

    res.setHeader("content-type", "application/json");
    res.status(200).send({
      "data": {
        "list": list_rooms
      },
    });
  }
}

// Создаем экземпляр класса RoomController и экспортируем его.
export const roomController = new RoomController();
