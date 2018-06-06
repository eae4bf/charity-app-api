import { repository } from "@loopback/repository";
import { CharityRepository } from "../repositories/charity.repository";
import { post, get, requestBody, Request, param, HttpErrors } from "@loopback/rest";
import { Charity } from "../models/charity";

export class CharityController {
    constructor(
        @repository(CharityRepository) private charityRepo: CharityRepository) {
    }

    @get('/charities')
    async getAllCharities(): Promise<Array<Charity>> {
        return await this.charityRepo.find();
    }

    @get('/charitiesID/{charity_id}')
    async getAllCharitiesbyID(@param.path.number('charity_id') charity_id: number): Promise<Charity> {
        let charityExists: boolean = !!(await this.charityRepo.count({ charity_id }));

        if (!charityExists) {
            throw new HttpErrors.BadRequest(`charity ID ${charity_id} does not exist`);
        }
        return await this.charityRepo.findById(charity_id);
    }

    @post('/reg/charities')
    async createCharity(@requestBody() charity: Charity) {
        if (!charity.name) {
            throw new HttpErrors.BadRequest('missing data');
        }

        let charityExists: boolean = !!(await this.charityRepo.count({ name: charity.name }));

        if (charityExists) {
            throw new HttpErrors.BadRequest('charity already exists');
        }

        return await this.charityRepo.create(charity);
    }

}
