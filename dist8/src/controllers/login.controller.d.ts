import { UserRepository } from "../repositories/user.repository";
import { User } from "../models/user";
export declare class LoginController {
    private userRepo;
    constructor(userRepo: UserRepository);
    sendUser(user: User): Promise<User>;
    getAllUsers(): Promise<Array<User>>;
}
