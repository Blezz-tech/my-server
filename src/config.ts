import dotenv from "dotenv"
import { DataSource } from "typeorm"

import { Admins } from "./entity/Admins"
import { Tokens } from "./entity/Tokens"
import { Rooms } from "./entity/Rooms"


dotenv.config()

const db = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: 3306,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [Admins, Tokens, Rooms],
    logging: true,
    synchronize: true,
})

const port = process.env.PORT || 5000

const jwt_secret = process.env.JWT_SECRET;

export { port, db, jwt_secret }