import { UserRepository } from "../repositories/user.repository";
import { User } from "../models/user";
export declare class UsersController {
    private userRepo;
    constructor(userRepo: UserRepository);
    getAllUsers(jwt: string): Promise<Array<User>>;
    getAllUsersbyID(id: number): Promise<User>;
    deleteUserbyID(id: number): Promise<boolean>;
    updateUserById(id: number, user: User): Promise<boolean>;
    getDonationsByUserId(id: number, dateFrom: Date): Promise<void>;
}
