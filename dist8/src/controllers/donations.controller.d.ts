import { DonationRepository } from "../repositories/donation.repository";
import { CharityRepository } from "../repositories/charity.repository";
import { UserRepository } from "../repositories/user.repository";
import { Donation } from "../models/donation";
export declare class DonationController {
    private donationRepo;
    private charityRepo;
    private userRepo;
    constructor(donationRepo: DonationRepository, charityRepo: CharityRepository, userRepo: UserRepository);
    createDonation(donation: Donation): Promise<Donation>;
}
