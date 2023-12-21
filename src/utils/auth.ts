// Импорт необходимых типов и сущности
import { NextFunction, Request, Response } from "express";
import { Tokens } from "../entity/Tokens";
import { db } from "../config";

// Функция middleware для проверки авторизации
const checkAuth = async (req: Request, res: Response, next: NextFunction) => {
    // Объект с сообщением об ошибке
    const output = {
        "message": "Unauthorized",
        "errors": {
            "token": "invalid credentials"
        }
    };

    // Проверка наличия заголовка авторизации
    if (req.headers.authorization == undefined) {
        // Если заголовок отсутствует, возвращаем статус 402 и сообщение об ошибке
        return res.status(402).send(output);
    }

    // Извлечение токена из заголовка авторизации
    const token: any = req.headers.authorization.slice(7);

    // Проверка существования токена в базе данных
    const isTokenExist = await db.getRepository(Tokens).exist({
        where: {
            "token": token
        }
    });

    // Если токена нет в базе данных, возвращаем статус 402 и сообщение об ошибке
    if (!isTokenExist) {
        return res.status(402).send(output);
    }

    // Если все проверки прошли успешно, продолжаем обработку запроса
    next();
};

// Экспорт функции для использования в других частях приложения
export { checkAuth }