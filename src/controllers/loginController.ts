import { Request, Response, NextFunction } from 'express';

class LoginController {
    async post(req: Request, res: Response) {
        const { username, password }: { username: string; password: string } = req.body;

        res.setHeader('content-type', 'application/json');

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
            res.status(200).send(({
                "data": {
                    "token_user": "the-best-token"
                }
            }));
        }
    }
}


export const loginController = new LoginController()

// const loginController = new LoginController()
// export {loginController};