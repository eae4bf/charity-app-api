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
const payment_method_repository_1 = require("../repositories/payment-method.repository");
const user_repository_1 = require("../repositories/user.repository");
const rest_1 = require("@loopback/rest");
const address_repository_1 = require("../repositories/address.repository");
const payment_method_1 = require("../models/payment-method");
let PaymentMethodController = class PaymentMethodController {
    constructor(paymentMethodRepo, userRepo, addressRepo) {
        this.paymentMethodRepo = paymentMethodRepo;
        this.userRepo = userRepo;
        this.addressRepo = addressRepo;
    }
    async getAllPaymentMethods() {
        return await this.paymentMethodRepo.find();
    }
    async createPaymentMethod(paymentMethod) {
        let userExists = !!(await this.userRepo.count({ id: paymentMethod.user_id }));
        if (!userExists) {
            throw new rest_1.HttpErrors.BadRequest(`user ID ${paymentMethod.user_id} does not exist`);
        }
        return await this.paymentMethodRepo.create(paymentMethod);
    }
};
__decorate([
    rest_1.get('/payment-methods'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PaymentMethodController.prototype, "getAllPaymentMethods", null);
__decorate([
    rest_1.post('/reg/payment-methods'),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [payment_method_1.PaymentMethod]),
    __metadata("design:returntype", Promise)
], PaymentMethodController.prototype, "createPaymentMethod", null);
PaymentMethodController = __decorate([
    __param(0, repository_1.repository(payment_method_repository_1.PaymentMethodRepository)),
    __param(1, repository_1.repository(user_repository_1.UserRepository)),
    __param(2, repository_1.repository(address_repository_1.AddressRepository)),
    __metadata("design:paramtypes", [payment_method_repository_1.PaymentMethodRepository,
        user_repository_1.UserRepository,
        address_repository_1.AddressRepository])
], PaymentMethodController);
exports.PaymentMethodController = PaymentMethodController;
//# sourceMappingURL=payment-methods.controller.js.map