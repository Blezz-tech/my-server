import { Express, Request, Response } from 'express';


class LoginController {
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
            // Заменить на запрос из БД
            const admins = [
                {
                    "username": "admin",
                    "password": "admin"
                },
                {
                    "username": "admin1",
                    "password": "admin"
                },
                {
                    "username": "admin",
                    "password": "adm3in"
                },
                {
                    "username": "admin",
                    "password": "adm5in"
                },
                {
                    "username": "admin",
                    "password": "ad6min"
                },
                {
                    "username": "admvin",
                    "password": "ad7min"
                },
                {
                    "username": "admbin",
                    "password": "admsin"
                },
            ];

            const isAdminExists: Boolean = admins.map(admin => username == admin.username && password == admin.password).includes(true)
            if (!isAdminExists) {
                res.status(401).send(({
                    "message": "Unauthorized",
                    "login": "invalid credentials"
                }));
            } else {

                // Добавить функцию генерации токена
                // Добавить функцию вставки в базу данных токена и какому админу она принадлежит
                res.status(200).send(({
                    "data": {
                        "token_user": "the-best-token"
                    }
                }));
            }
        }
    }
}

module.exports = new LoginController();
