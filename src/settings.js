import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 5000;

const dbSettings = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD
};

export { dbSettings, port };
