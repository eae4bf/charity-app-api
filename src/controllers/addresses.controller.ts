import { repository } from "@loopback/repository";
import { AddressRepository } from "../repositories/address.repository";
import { UserRepository } from "../repositories/user.repository";
import { post, get, requestBody, Request, param, HttpErrors } from "@loopback/rest";
import { Address } from "../models/address";

export class AddressController {
    constructor(
        @repository(AddressRepository) private addressRepo: AddressRepository,
        @repository(UserRepository) private userRepo: UserRepository
    ) {
    }

    @get('/address')
    async getAllAddresses(): Promise<Array<Address>> {
        return await this.addressRepo.find();
    }


    @post('/reg/address')
    async createAddress(@requestBody() address: Address) {
        let userExists: boolean = !!(await this.userRepo.count({ id:address.user_id }));

        if (!userExists) {
          throw new HttpErrors.BadRequest(`user ID ${address.user_id} does not exist`);
        }

        return await this.addressRepo.create(address);

    }

   




}