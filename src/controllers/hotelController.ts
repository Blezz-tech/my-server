import { db } from "../config.js";
import { Hotels } from "../entity/Hotels.js";
import { Request, Response } from 'express';

// Класс HotelController содержит методы для работы с отелями.
class HotelController {
  // Метод create создает новый отель.
  // Он принимает HTTP-запрос и ответ, извлекает данные отеля из тела запроса,
  // проверяет их уникальность, создает нового отеля с этими данными, сохраняет его в базе данных и отправляет ответ с сообщением о том, что отель был успешно создан.
  async create(req: Request, res: Response) {
    const { name, number } = req.body;
    const hotel_settings = {
      "name": name,
      "number": number,
    };

    // Проверка на уникальность данных отеля
    for (const [key, value] of Object.entries(hotel_settings)) {
      console.log(`${key}: ${value}`);
      const checking = {};
      checking[`${key}`] = value;

      const isExist = await db.getRepository(Hotels).exist({
        where: checking
      });

      if (isExist) {
        checking[`${key}`] = [value];

        return res.status(401).json({
          "message": "The given data was invalid",
          "errors": checking,
        });
      }
    }

    const new_hotel = await db.getRepository(Hotels).create({ name, number })
    const results = await db.getRepository(Hotels).save(new_hotel);

    res.status(200).send({
      data: {
        id: results.id,
        name: name,
        number: number
      },
    });
  }

  // Метод getAll возвращает список всех отелей.
  async getAll(req: Request, res: Response) {
    const results = await db.getRepository(Hotels).find();
    const processd_result = results.map(item => ({
      name: item.name,
      number: item.number
    }));

    res.status(200).send({
      list: processd_result,
    });
  }

  // Метод destroy удаляет отель по его ID.
  // Если отель существует, он удаляется из базы данных и отправляется ответ с сообщением о том, что отель был успешно удален.
  // Если отеля не существует, отправляется ответ с сообщением об ошибке.
  async destroy(req: Request, res: Response) {
    const id: any = req.params.id;

    const isHotelExist = await db.getRepository(Hotels).exist({
      where: {
        "id": id
      }
    });

    if (!isHotelExist) {
      return res.status(403).json({
        "error": {
          "message": "Not found"
        }
      });
    }

    const result = await db.getRepository(Hotels).delete(id);

    res.send({
      "data": {
        "message": "Deleted"
      }
    });
  }
}

// Создаем экземпляр класса HotelController и экспортируем его.
export const hotelController = new HotelController();
