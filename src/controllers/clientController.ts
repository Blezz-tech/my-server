import { Request, Response } from 'express';
import { db } from '../config';
import { Clients } from '../entity/Clients';

// Класс ClientController содержит методы для работы с клиентами.
class ClientController {
  async create(req: Request, res: Response) {
    // Извлечение данных из тела запроса
    const { fio, email, phone, id_rooms, birth_date } = req.body;
    const clients_settings = {
      "fio": fio,
      "email": email,
      "phone": phone,
      "birth_date": birth_date
    };

    // Проверка на уникальность данных клиента
    for (const [key, value] of Object.entries(clients_settings)) {
      console.log(`${key}: ${value}`);
      const checking = {};
      checking[`${key}`] = value;

      const isExist = await db.getRepository(Clients).exist({
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

    clients_settings["id_rooms"] = id_rooms;

    // Создание нового клиента
    const new_client = await db.getRepository(Clients).create(clients_settings)
    const results = await db.getRepository(Clients).save(new_client)

    // Отправка ответа о успешном создании клиента
    res.status(200).send({
      data: {
        message: "Created",
      },
    });
  }

  async destroy(req: Request, res: Response) {
    // Получение ID клиента из параметров запроса
    const id: any = req.params.id;

    // Проверка существования клиента с данным ID
    const isClientExist = await db.getRepository(Clients).exist({
      where: {
        "id": id
      }
    });

    // Если клиента с таким ID не существует, возвращаем ошибку
    if (!isClientExist) {
      return res.status(403).json({
        "error": {
          "message": "Not found"
        }
      });
    }

    // Удаление клиента с данным ID из базы данных
    const result = await db.getRepository(Clients).delete(id);

    // Отправка ответа о успешном удалении клиента
    res.send({
      "data": {
        "message": "Deleted"
      }
    });
  }

  async update(req: Request, res: Response) {
    // Получение ID клиента из параметров запроса
    const id: any = req.params.id;

    // Проверка существования клиента с данным ID
    const isClientExist = await db.getRepository(Clients).exist({
      where: {
        "id": id
      }
    });

    // Если клиента с таким ID не существует, возвращаем ошибку
    if (!isClientExist) {
      return res.status(403).json({
        "error": {
          "message": "Not found"
        }
      });
    }

    // Извлечение данных клиента из тела запроса
    const { fio, email, phone, id_rooms, birth_date } = req.body;
    const clients_settings = {
      "id_rooms": id_rooms,
      "fio": fio,
      "email": email,
      "phone": phone,
      "birth_date": birth_date
    };

    // Удаление неопределенных значений из объекта clients_settings
    Object.keys(clients_settings).forEach(key =>
      clients_settings[key] === undefined
        ? delete clients_settings[key]
        : {});

    // Поиск клиента с данным ID в базе данных
    const property = await db.getRepository(Clients).findOne({
      where: { id }
    });

    // Обновление данных клиента в базе данных
    const result = await db.getRepository(Clients).save({
      ...property, // существующие поля
      ...clients_settings // обновленные поля
    });

    // Отправка ответа о успешном обновлении клиента
    res.status(200).send({
      "data": {
        "id": id,
        "message": "Updated"
      }
    });
  }

  async showInRooms(req: Request, res: Response) {
    // Получение всех клиентов из базы данных
    const results = await db.getRepository(Clients).find();

    // Преобразование полученных данных в нужный формат
    const process_results = results.map(item => ({
      fio: item.fio,
      phonenumber: item.phone
    }));

    // Вывод результатов в консоль
    console.log(results);

    // Отправка ответа с данными клиентов
    res.status(200).send({
      data: {
        name: "Название",
        userdata: process_results
      },
    });
  }
}

// Создаем экземпляр класса ClientController и экспортируем его.
export const clientController = new ClientController();