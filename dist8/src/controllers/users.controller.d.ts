import { UserRepository } from "../repositories/user.repository";
import { User } from "../models/user";
export declare class UsersController {
    private userRepo;
    constructor(userRepo: UserRepository);
    getAllUsers(): Promise<Array<User>>;
    getAllUsersbyID(id: number): Promise<User>;
    deleteUserbyID(id: number): Promise<boolean>;
}
