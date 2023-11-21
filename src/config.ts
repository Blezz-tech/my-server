import dotenv from "dotenv"
import { DataSource } from "typeorm"

dotenv.config()

const myDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: 3306,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: ["src/entity/*.js"],
    logging: true,
    synchronize: true,
})

const port = process.env.PORT || 5000

export { port, myDataSource }
