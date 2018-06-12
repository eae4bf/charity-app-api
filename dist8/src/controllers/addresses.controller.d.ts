import { AddressRepository } from "../repositories/address.repository";
import { UserRepository } from "../repositories/user.repository";
import { Address } from "../models/address";
export declare class AddressController {
    private addressRepo;
    private userRepo;
    constructor(addressRepo: AddressRepository, userRepo: UserRepository);
    getAllAddresses(): Promise<Array<Address>>;
    createAddress(address: Address): Promise<Address>;
}
