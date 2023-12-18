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

# Остальное


- jsonwebtoken
- express-validator

- [ ] Найти плагины для vscode для nodejs
- [ ] Найти нормальную структуру для express js
    - https://blog.logrocket.com/organizing-express-js-project-structure-better-productivity/
    - https://www.reddit.com/r/node/comments/ob4ser/a_good_nodejsexpress_project_structure/
    - https://www.reddit.com/r/node/comments/12aatt9/project_file_structure_and_best_practices_you/
    - https://www.reddit.com/r/node/comments/xci5z9/node_express_js_project_structure_best_practice/
    - https://www.reddit.com/r/node/comments/ruu7hw/is_this_a_good_way_to_structure_a_nodejsexpress/
    - https://www.reddit.com/r/learnjavascript/comments/gp0j1l/are_there_any_best_practices_on_the_express_js/
    - https://www.reddit.com/r/webdev/comments/13wu96i/best_file_structure_for_node_js_project/
    - https://www.reddit.com/r/node/comments/15sk4kz/looking_for_an_expressjs_project_example/
    - https://www.reddit.com/r/node/comments/10u40is/clean_and_basic_nodejs_expressjs_template/
    - https://www.reddit.com/r/node/comments/8463u0/projectfolder_structure_for_nodeexpress_apps/
    - https://www.reddit.com/r/node/comments/r5iar2/how_to_organize_a_nodejs_project/
    - https://www.google.com/search?q=Express.js+project+structure+reddit&sca_esv=572205757&sxsrf=AM9HkKk7PCtwBjjUy97l0aD8QBv43aoT2Q%3A1696940376248&ei=WEElZbLnDuWuwPAPs5eigAs&ved=0ahUKEwiy89LCu-uBAxVlFxAIHbOLCLAQ4dUDCBA&uact=5&oq=Express.js+project+structure+reddit&gs_lp=Egxnd3Mtd2l6LXNlcnAiI0V4cHJlc3MuanMgcHJvamVjdCBzdHJ1Y3R1cmUgcmVkZGl0MgcQIRigARgKMggQIRgWGB4YHUi0CFBrWKMHcAF4AZABAJgB6wGgAb8GqgEFMy4yLjG4AQPIAQD4AQHCAgoQABhHGNYEGLADwgIGEAAYFhgewgIFECEYoAHiAwQYACBBiAYBkAYI&sclient=gws-wiz-serp

- [ ] Шаблонизаторы выбрать на будущее:
    - https://pugjs.org
    - https://ejs.co/
    - https://handlebarsjs.com/




- https://www.youtube.com/watch?v=Oe421EPjeBE
- https://github.com/john-smilga/node-express-course/tree/main
- https://codevoweb.com/node-express-typeorm-postgresql-rest-api/

- Спросить за jsonwebtoken

- https://github.com/john-smilga/node-express-course