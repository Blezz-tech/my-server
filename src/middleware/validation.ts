import { Request, Response, NextFunction } from 'express';

type ErrorValidation = {
    "message": String,
    "errors": {
        "username"?: String[],
        "password"?: String[]
    }
};

type UserAuth = {
    username: String;
    password: String
};

const userEmpty: String = "The username field is required.";
const passwordEmpty: String = "The password field is required.";

function validateUser(req: Request, res: Response, next: NextFunction) {
    const { username, password }: UserAuth = req.body;
    res.setHeader('content-type', 'application/json');

    const test_error: ErrorValidation = {
        "message": "The given data was invalid",
        "errors": {}
    };

    if (!username && !password) {
        test_error.errors["username"] = [userEmpty];
        test_error.errors["password"] = [passwordEmpty];

        res.status(401).send(test_error);
    } else if (!username) {
        test_error.errors["username"] = [userEmpty];

        res.status(401).send(test_error);
    } else if (!password) {
        test_error.errors["password"] = [passwordEmpty];

        res.status(401).send(test_error);
    } else {
        next()
    }
}

export { validateUser };