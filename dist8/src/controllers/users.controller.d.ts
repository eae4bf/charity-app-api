import { UserRepository } from "../repositories/user.repository";
import { User } from "../models/user";
export declare class UsersController {
    private userRepo;
    constructor(userRepo: UserRepository);
    getAllUsers(): Promise<Array<User>>;
    getUserbyKey(jwt: string): Promise<string | object>;
    getAllUsersbyID(id: number): Promise<User>;
    deleteUserbyID(id: number): Promise<void>;
    updateUserById(id: number, user: User): Promise<boolean>;
}
