import { CharityRepository } from "../repositories/charity.repository";
import { Charity } from "../models/charity";
export declare class CharityController {
    private charityRepo;
    constructor(charityRepo: CharityRepository);
    getAllCharities(): Promise<Array<Charity>>;
    getAllCharitiesbyID(id: number): Promise<Charity>;
    createCharity(charity: Charity): Promise<Charity>;
}
