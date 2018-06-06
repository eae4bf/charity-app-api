import { UserRepository } from "../repositories/user.repository";
import { User } from "../models/user";
export declare class UsersController {
    private userRepo;
    constructor(userRepo: UserRepository);
    getAllUsers(): Promise<Array<User>>;
    getAllUsersbyID(user_id: number): Promise<User>;
    deleteUserbyID(user_id: number): Promise<boolean>;
    getDonationsByUserId(id: number, dateFrom: Date): Promise<void>;
}
