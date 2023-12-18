# my-server


# Техническая документация

## Введение

Краткое описание цели проекта, его основных характеристик и технологий, используемых в нем.

## Установка

Для работы проекта необходимы следующие программы: `nodejs`, `nix`, `git`

Создайте папку `projects` где хотите

Откройте её в консоли

В консоли запустите

```bash
git clone https://github.com/Blezz-tech/my-server.git
```

Установка необходимых пакетов для nodejs

```bash
npm i
```

Установка Базы данных

```bash
direnv allow
```

Запуск базы данных

```bash
devenv up
```

Запуск проекта

```bash
npm run dev
```

## Структура проекта

```
.
├── db-connect.sh
├── tasks
│   └── 3_Модуль.pdf
├── flake.lock
├── flake.nix
├── package.json
├── package-lock.json
├── README.md
├── src
│   ├── config.ts
│   ├── controllers
│   │   ├── adminController.ts
│   │   ├── clientController.ts
│   │   ├── hotelController.ts
│   │   ├── roomController.ts
│   │   └── tokenController.ts
│   ├── entity
│   │   ├── Admins.ts
│   │   ├── Clients.ts
│   │   ├── Hotels.ts
│   │   ├── Rooms.ts
│   │   └── Tokens.ts
│   ├── index.ts
│   ├── routes
│   │   ├── hotelRouter.ts
│   │   ├── index.ts
│   │   ├── loginRouter.ts
│   │   ├── registerRouter.ts
│   │   ├── roomRouter.ts
│   │   ├── roomsRouter.ts
│   │   ├── signupRouter.ts
│   │   ├── userdataRouter.ts
│   │   └── usersinroomRouter.ts
│   └── utils
│       ├── auth.ts
│       ├── helper.ts
│       └── jwt.ts
└── tsconfig.json
```

- `.env` Файл с 
- `.envrc` `flake.lock` `flake.nix` Файлы для установки базы данных
- `package.json` `package-lock.json` содержит информацию о проекте и его зависимостях
- `db-connect.sh` Скрипт подключения к базе данных
- `tsconfig.json` Содержит конфигурацию для TypeScript
- `README.md` Проектная документация
- `tasks/3_Модуль.pdf` Задание
- `src/` Папка с непосредственны кодом

Всё что внутри `src/`

- `controllers/` Контроллеры, обрабатывающие HTTP-запросы и взаимодействующие с моделями данных
- `entity/` Модели данных, представляющие таблицы в базе данных
- `routes/` Маршруты, определяющие URL-адреса, по которым будет доступно приложение
- `utils/` Вспомогательные программы используемые по всему приложению
- `config.ts` Конфигурация для использования приложением
- `index.ts` Главный файл приложения

## Работа с базой данных

Запуск БД описывается в [Установка](#Установка)


### Установка Базы данных

```bash
direnv allow
```

### Запуск базы данных

```bash
devenv up
```

### Создание моделей

Создаётся файл в папке `/src/entity/`

Пример `/src/entity/Rooms`

```js
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Rooms {
    @PrimaryGeneratedColumn()
    id: Number

    @Column()
    name: String

    @Column()
    desc_data: String
}
```

и необходимо добавить его в массив моделей в файл `/src/config.ts`, там где создаётся база данных

```js
entities: [Admins, Tokens, Rooms, Clients, Hotels],
```

## Маршруты и контроллеры

### Маршруты

Маршруты в Express.js определяют, как приложение отвечает на клиентский запрос к конкретному адресу (URI). Они связывают HTTP действия (GET, POST, PUT, DELETE, etc.)

Все маршруты храняться в `/src/routes/`

Главный роутер находится в файле `/src/routes/index.ts`

Его мы используем в файле `/src/index.ts`

### Контроллеры

Контроллеры в Express.js - это функции, которые обрабатывают входящие HTTP-запросы.

Храняться в папке `/src/controllers/`


## Тестирование

В Postman Создаётся папки по маршрутам и вкладываются в них запросы

Необхожимо опеспечить полное прокрытие по всему ряду запросов/ответов

Чтобы понять как пользоваться Postman'ом

1. [Как пользоваться программой Postman](https://timeweb.com/ru/community/articles/kak-polzovatsya-postman)
2. [Postman для REST API запросов. Быстрый старт и переменные](https://www.youtube.com/watch?v=A_jGdrGRLd0)

## Развертывание

В разработке

## Поддержка и обслуживание

В разработке

## Пакеты используемые в проекте, но не допущенные по тз

- jsonwebtoken
- express-validator

## Курсы для изучения

1. [Node.js and Express.js - Full Course](https://www.youtube.com/watch?v=Oe421EPjeBE)
  - [github repo node-express-course](https://github.com/john-smilga/node-express-course)
2. [Node.js, Express, TypeORM, PostgreSQL: CRUD Rest API](https://codevoweb.com/node-express-typeorm-postgresql-rest-api/)
