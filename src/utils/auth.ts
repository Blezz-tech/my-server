import { NextFunction, Request, Response } from "express";
import { Tokens } from "../entity/Tokens";
import { db } from "../config";
import { isEmpty } from "class-validator";

const checkAuth = async (req: Request, res: Response, next: NextFunction) => {
    const output = {
        "message": "Unauthorized",
        "errors": {
            "token": "invalid credentials"
        }
    };

    if (isEmpty(req.headers.authorization)) {
        return res.status(402).send(output);
    }

    const token: any = req.headers.authorization.slice(7);

    const isTokenExist = await db.getRepository(Tokens).exist({
        where: {
            "token": token
        }
    });

    if (!isTokenExist) {
        return res.status(402).send(output);
    }

    next();
};


// const checkEmpty =
//     (req: Request, res: Response, next: NextFunction) => {
//         const output = {
//             "message": "The given data was invalid.",
//             "errors": {}
//         };

//         const result = validationResult(req);
//         if (!result.isEmpty()) {
//             result.array().forEach((item) => {
//                 output.errors[item["path"]] = [`The ${item["path"]} field is required.`];
//             });
//             return res.status(401).send(output);
//         }
//         next()
//     };

export { checkAuth }