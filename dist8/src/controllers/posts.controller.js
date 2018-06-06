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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("@loopback/repository");
const post_repository_1 = require("../repositories/post.repository");
const project_repository_1 = require("../repositories/project.repository");
const rest_1 = require("@loopback/rest");
const post_1 = require("../models/post");
let UsersController = class UsersController {
    constructor(postRepo, projectRepo) {
        this.postRepo = postRepo;
        this.projectRepo = projectRepo;
    }
    async createPost(post) {
        let projectExists = !!(await this.projectRepo.count({ id: post.project_id }));
        if (!projectExists) {
            throw new rest_1.HttpErrors.BadRequest(`project ID ${post.project_id} does not exist`);
        }
        return await this.postRepo.create(post);
    }
};
__decorate([
    rest_1.post('/charities/:id/projects/:id/posts'),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [post_1.Post]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "createPost", null);
UsersController = __decorate([
    __param(0, repository_1.repository(post_repository_1.PostRepository)),
    __param(1, repository_1.repository(project_repository_1.ProjectRepository)),
    __metadata("design:paramtypes", [post_repository_1.PostRepository,
        project_repository_1.ProjectRepository])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=posts.controller.js.map