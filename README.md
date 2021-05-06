# neoportal
## Installation
На данном этапе необходимо инициализировать зависимости в деррикториях neoflex & server

```bash
$ npm install
```
## Docker image deployment
Развертывание проекта

```bash
$ 1. docker pull ivoin/react-neo
$ 2. docker pull ivoin/serve-neo
$ 3. docker-compose up
```

## REST API запросы
1) Необходимо создать пользователя с ролью ADMIN (по умолчанию USER)
2) Для создания постов, ролей, назначения ролей или БАН необходимо авторизоваться в качестве Администратора
3) Для получения списка пользователей или чтения постов, необходимо авторизоваться

```bash
$ 1. create posts - Создание постов (POST) - /posts # { "title:" "Post 1", "content": "la la la ", "userId": 7, "file": "asfasf", "image": "logo.png" }
$ 2. get users (GET) - /users # { "email": "example@exampe.com", "password": "123" }
$ 3. create users (POST) - /users # { "email": "example@exampe.com", "password": "123" }
$ 4. registration users (POST) - /auth/registration # { "email": "example@exampe.com", "password": "123" }
$ 5. loginIn users (POST) - /auth/login # { "email": "example@exampe.com", "password": "123" }
$ 6. Create roles (POST) - /roles # { "value": "USER", "description": "Пользователь" }
$ 7. get role (GET) - /roles/role # /roles/ADMIN
$ 8. add role User (только Админ POST) - /users/role # { "userId": 7, "value": "ADMIN" }
$ 9. add ban User (только Админ POST) - /users/ban # { "userId": 7, "banReason": "Хулиган"}
$ 9. Документация Swagger - /api/docs
```