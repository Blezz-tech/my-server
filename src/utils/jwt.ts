import jwt from 'jsonwebtoken';
import { jwt_secret } from '../config';

// Эта функция принимает объект пользователя и создает JWT, используя секретный ключ.
// Возвращает созданный JWT.
const createJWT = (user: any) => {
    const token: string = jwt.sign(user, jwt_secret);
    return token;
};

// Эта функция принимает JWT и проверяет его на валидность, используя секретный ключ.
// Возвращает результат проверки.
const isTokenValid = (token: string) => jwt.verify(token, jwt_secret);

export {
    createJWT,
    isTokenValid,
};