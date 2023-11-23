import { Router } from "express";
import { signupController } from "../controllers/signupController";
import { body, validationResult } from "express-validator";
import { db } from '../config';
import { Users } from '../entity/Users';
import { checkEmpty } from "../utils/helper";

const signupRouter = Router();

signupRouter.post("/",
    [
        body("username").notEmpty(),
        body("password").notEmpty()
    ],
    checkEmpty,
    async (req, res, next) => {
        const { username } = req.body;
        const isUserExist = await db.getRepository(Users).exist({
            where: {
                "username": username
            }
        });
        if (isUserExist) {
            return res.status(401).json({
                "message": "The given data was invalid",
                "errors": {
                    "username": [
                        "this username is exist"
                    ]
                },
            });
        }
        next()
    },
    signupController.post
);

export { signupRouter };
