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
const donation_repository_1 = require("../repositories/donation.repository");
const charity_repository_1 = require("../repositories/charity.repository");
const user_repository_1 = require("../repositories/user.repository");
const rest_1 = require("@loopback/rest");
const donation_1 = require("../models/donation");
let DonationController = class DonationController {
    constructor(donationRepo, charityRepo, userRepo) {
        this.donationRepo = donationRepo;
        this.charityRepo = charityRepo;
        this.userRepo = userRepo;
    }
    async createDonation(donation) {
        let charityExists = !!(await this.charityRepo.count({ id: donation.charity_id }));
        if (!charityExists) {
            throw new rest_1.HttpErrors.BadRequest(`charity ID ${donation.charity_id} does not exist`);
        }
        let userExists = !!(await this.userRepo.count({ id: donation.user_id }));
        if (!userExists) {
            throw new rest_1.HttpErrors.BadRequest(`user ID ${donation.user_id} does not exist`);
        }
        if (!donation.charity_id || !donation.user_id || !donation.amount) {
            throw new rest_1.HttpErrors.BadRequest('missing data');
        }
        return await this.donationRepo.create(donation);
    }
};
__decorate([
    rest_1.post('/reg/donation'),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [donation_1.Donation]),
    __metadata("design:returntype", Promise)
], DonationController.prototype, "createDonation", null);
DonationController = __decorate([
    __param(0, repository_1.repository(donation_repository_1.DonationRepository)),
    __param(1, repository_1.repository(charity_repository_1.CharityRepository)),
    __param(2, repository_1.repository(user_repository_1.UserRepository)),
    __metadata("design:paramtypes", [donation_repository_1.DonationRepository,
        charity_repository_1.CharityRepository,
        user_repository_1.UserRepository])
], DonationController);
exports.DonationController = DonationController;
//# sourceMappingURL=donations.controller.js.map