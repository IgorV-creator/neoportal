import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersRoles } from "./roles/users-roles";
import { Role } from "./roles/roles.model";
import { User } from "./users/users.model";
import { UsersModule } from './users/users.module';
import { RolesModule } from "./roles/roles.module";
import { AuthModule } from './auth/auth.module';
import { PostsModule } from './posts/posts.module';
import { Post } from "./posts/posts.model";
import { FilesModule } from './files/files.module';
import { ServeStaticModule } from "@nestjs/serve-static";
import * as path from 'path';
// const mariadb = require('mariadb');

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`
        }),
        ServeStaticModule.forRoot({
            rootPath: path.resolve( __dirname, 'static'),
        }),
        //Устанавливаем связь с БД
        SequelizeModule.forRoot({
            dialect: 'mariadb',
            host: process.env.MIRAIDB_HOST,
            port: Number(process.env.MIRAIDB_PORT),
            username: process.env.MIRAIDB_USERNAME,
            password: String(process.env.MIRAIDB_PASSWORD),
            database: process.env.MIRAIDB_DB,
            models:  [User, Role, UsersRoles, Post],
            autoLoadModels: true,
            // synchronize: true
            }),
        UsersModule, RolesModule, AuthModule, PostsModule, FilesModule,
        ],
})
export class AppModule {}