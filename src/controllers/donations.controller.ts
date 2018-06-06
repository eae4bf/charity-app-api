import { repository } from "@loopback/repository";
import { DonationRepository } from "../repositories/donation.repository";
import { CharityRepository } from "../repositories/charity.repository";
import { UserRepository } from "../repositories/user.repository";
import { post, get, requestBody, Request, param, HttpErrors } from "@loopback/rest";
import { Donation } from "../models/donation";
import { Charity } from "../models/charity";
import { User } from "../models/user";


export class DonationController {
    constructor(
        @repository(DonationRepository) private donationRepo: DonationRepository, 
        @repository(CharityRepository) private charityRepo: CharityRepository,
        @repository(UserRepository) private userRepo: UserRepository
    ){
    }

    @post('/reg/donation')
    async createDonation(@requestBody() donation: Donation) {

        let charityExists: boolean = !!(await this.charityRepo.count({ id:donation.charity_id }));

        if (!charityExists) {
            throw new HttpErrors.BadRequest(`charity ID ${donation.charity_id} does not exist`);
        }

        let userExists: boolean = !!(await this.userRepo.count({ id:donation.user_id }));

        if (!userExists) {
          throw new HttpErrors.BadRequest(`user ID ${donation.user_id} does not exist`);
        }

        if(!donation.charity_id || !donation.user_id || !donation.amount) {
            throw new HttpErrors.BadRequest('missing data');
        }

        return await this.donationRepo.create(donation);
    }


}