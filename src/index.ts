// Импортируем необходимые модули и конфигурацию
import express from "express";
import cors from "cors";
import { db, port } from "./config.js";
import { router } from "./routes/index.js";

// Инициализируем подключение к базе данных и обрабатываем возможные ошибки
db.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    })

// Создаем экземпляр приложения Express
const app = express();

// Добавляем middleware для CORS и для парсинга JSON тела запроса
app.use(cors());
app.use(express.json());

// Подключаем маршруты к приложению
app.use("/", router);

// Запускаем сервер на определенном порту и выводим сообщение в консоль
app.listen(port, () =>
    console.log(`Server started on port http://localhost:${port}`, new Date())
);