// Импорт необходимых модулей и сущностей
import dotenv from "dotenv"
import { DataSource } from "typeorm"
import { Admins } from "./entity/Admins"
import { Tokens } from "./entity/Tokens"
import { Rooms } from "./entity/Rooms"
import { Clients } from "./entity/Clients"
import { Hotels } from "./entity/Hotels"

// Загрузка переменных окружения из файла .env
dotenv.config()

// Создание новой источника данных с параметрами подключения к базе данных
const db = new DataSource({
   type: "mysql",
   host: process.env.DB_HOST,
   port: 3306,
   username: process.env.DB_USER,
   password: process.env.DB_PASSWORD,
   database: process.env.DB_NAME,
   entities: [Admins, Tokens, Rooms, Clients, Hotels],
   logging: true,
   synchronize: true,
})

// Получение порта из переменных окружения или установка значения по умолчанию
const port = process.env.PORT || 5000

// Получение секретного ключа JWT из переменных окружения
const jwt_secret = process.env.JWT_SECRET;

// Экспорт переменных для дальнейшего использования в других частях приложения
export { port, db, jwt_secret }