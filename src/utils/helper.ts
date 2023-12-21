import { NextFunction, Request, Response } from "express";
import { body, validationResult } from "express-validator";

// Эта функция принимает имя поля, которое необходимо проверить на пустоту.
// Она возвращает функцию, которая будет использоваться в качестве middleware в маршрутах Express.
const fastNotEmpty = (record: string) => body(record).notEmpty().withMessage(`The ${record} field is required.`);

// Эта функция проверяет, есть ли ошибки валидации в запросе.
// Если они есть, она отправляет ответ с кодом состояния 401 и сообщением об ошибках.
// В противном случае она передает управление следующему middleware.
const checkEmpty =
    (req: Request, res: Response, next: NextFunction) => {
        const output = {
            "message": "The given data was invalid.",
            "errors": {}
        };

        const result = validationResult(req);
        if (!result.isEmpty()) {
            result.array().forEach((item) => {
                output.errors[item["path"]] = [`The ${item["path"]} field is required.`];
            });
            return res.status(401).send(output);
        }
        next()
    };

export { fastNotEmpty, checkEmpty }