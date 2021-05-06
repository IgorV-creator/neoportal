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
$ 1. create posts - Создание постов (POST) - /posts
$ 2. get users (GET) - /users
$ 3. create users (POST) - /users
$ 4. registration users (POST) - /auth/registration
$ 5. loginIn users (POST) - /auth/login
$ 6. Create roles (POST) - /roles
$ 7. get role (GET) - /roles/(ADMIN | USER | ... )
$ 8. add role User (только Админ POST) - /users/role
$ 9, Документация Swagger - /api/docs
```