import { NextFunction, Request, Response } from "express";
import { Tokens } from "../entity/Tokens";
import { db } from "../config";
// {
//     "message": "Unauthorized",
//         "errors": {
//         "login": "invalid credentials"
//     }
// }

const checkAuth = async (req: Request, res: Response, next: NextFunction) => {
    const output = {
        "message": "Unauthorized",
        "errors": {
            "token_not_exist": ""
        }
    };

    const auth = req.headers.authorization;

    const isTokenExist = await db.getRepository(Tokens).exist({
        where: {
            "token": auth
        }
    });



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