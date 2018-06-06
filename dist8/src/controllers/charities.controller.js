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
const charity_repository_1 = require("../repositories/charity.repository");
const rest_1 = require("@loopback/rest");
const charity_1 = require("../models/charity");
let CharityController = class CharityController {
    constructor(charityRepo) {
        this.charityRepo = charityRepo;
    }
    async getAllCharities() {
        return await this.charityRepo.find();
    }
    async getAllCharitiesbyID(charity_id) {
        let charityExists = !!(await this.charityRepo.count({ charity_id }));
        if (!charityExists) {
            throw new rest_1.HttpErrors.BadRequest(`charity ID ${charity_id} does not exist`);
        }
        return await this.charityRepo.findById(charity_id);
    }
    async createCharity(charity) {
        if (!charity.name) {
            throw new rest_1.HttpErrors.BadRequest('missing data');
        }
        let charityExists = !!(await this.charityRepo.count({ name: charity.name }));
        if (charityExists) {
            throw new rest_1.HttpErrors.BadRequest('charity already exists');
        }
        return await this.charityRepo.create(charity);
    }
};
__decorate([
    rest_1.get('/charities'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CharityController.prototype, "getAllCharities", null);
__decorate([
    rest_1.get('/charitiesID/{charity_id}'),
    __param(0, rest_1.param.path.number('charity_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CharityController.prototype, "getAllCharitiesbyID", null);
__decorate([
    rest_1.post('/reg/charities'),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [charity_1.Charity]),
    __metadata("design:returntype", Promise)
], CharityController.prototype, "createCharity", null);
CharityController = __decorate([
    __param(0, repository_1.repository(charity_repository_1.CharityRepository)),
    __metadata("design:paramtypes", [charity_repository_1.CharityRepository])
], CharityController);
exports.CharityController = CharityController;
//# sourceMappingURL=charities.controller.js.map