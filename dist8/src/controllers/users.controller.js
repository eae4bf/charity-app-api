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
const user_repository_1 = require("../repositories/user.repository");
const rest_1 = require("@loopback/rest");
let UsersController = class UsersController {
    constructor(userRepo) {
        this.userRepo = userRepo;
    }
    async getAllUsers() {
        return await this.userRepo.find();
    }
    async getAllUsersbyID(user_id) {
        let userExists = !!(await this.userRepo.count({ user_id }));
        if (!userExists) {
            throw new rest_1.HttpErrors.BadRequest(`user ID ${user_id} does not exist`);
        }
        return await this.userRepo.findById(user_id);
    }
    async deleteUserbyID(user_id) {
        let userDeleted = false;
        let userExists = !!(await this.userRepo.count({ user_id }));
        if (userExists) {
            this.userRepo.deleteById(user_id);
            userDeleted = true;
        }
        else {
            throw new rest_1.HttpErrors.BadRequest(`user ID ${user_id} does not exist`);
        }
        return userDeleted;
    }
    // @patch('/users')
    // async changeUserPassword(@param.path.string('password') newPassword: string) {
    //     "password": newPassword
    // }
    async getDonationsByUserId(id, dateFrom) {
        console.log(id);
        console.log(dateFrom);
        console.log('donation');
    }
};
__decorate([
    rest_1.get('/users'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getAllUsers", null);
__decorate([
    rest_1.get('/usersID/{user_id}'),
    __param(0, rest_1.param.path.number('cuser_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getAllUsersbyID", null);
__decorate([
    rest_1.post('/users'),
    __param(0, rest_1.param.path.number('user_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "deleteUserbyID", null);
__decorate([
    rest_1.get('users/{user_id}/donations'),
    __param(0, rest_1.param.path.number('user_id')),
    __param(1, rest_1.param.query.date('date_from')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Date]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getDonationsByUserId", null);
UsersController = __decorate([
    __param(0, repository_1.repository(user_repository_1.UserRepository.name)),
    __metadata("design:paramtypes", [user_repository_1.UserRepository])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map