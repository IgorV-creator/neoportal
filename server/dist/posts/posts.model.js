"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
const users_model_1 = require("../users/users.model");
const swagger_1 = require("@nestjs/swagger");
const sequelize_typescript_1 = require("sequelize-typescript");
const sequelize_typescript_2 = require("sequelize-typescript");
let Post = class Post extends sequelize_typescript_1.Model {
};
__decorate([
    swagger_1.ApiProperty({ example: '1', description: 'prymary key' }),
    sequelize_typescript_2.Column({ type: sequelize_typescript_2.DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true }),
    __metadata("design:type", Number)
], Post.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty({ example: 'Name Post', description: 'Post1' }),
    sequelize_typescript_2.Column({ type: sequelize_typescript_2.DataType.STRING }),
    __metadata("design:type", String)
], Post.prototype, "title", void 0);
__decorate([
    swagger_1.ApiProperty({ example: 'Content', description: 'Hello my world' }),
    sequelize_typescript_2.Column({ type: sequelize_typescript_2.DataType.STRING }),
    __metadata("design:type", String)
], Post.prototype, "content", void 0);
__decorate([
    swagger_1.ApiProperty({ example: 'UserId' }),
    sequelize_typescript_1.ForeignKey(() => users_model_1.User),
    sequelize_typescript_2.Column({ type: sequelize_typescript_2.DataType.INTEGER }),
    __metadata("design:type", Number)
], Post.prototype, "userId", void 0);
__decorate([
    sequelize_typescript_2.Column({ type: sequelize_typescript_2.DataType.STRING }),
    __metadata("design:type", String)
], Post.prototype, "image", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => users_model_1.User),
    __metadata("design:type", users_model_1.User)
], Post.prototype, "author", void 0);
Post = __decorate([
    sequelize_typescript_2.Table({
        tableName: 'posts'
    })
], Post);
exports.Post = Post;
//# sourceMappingURL=posts.model.js.map