import { repository } from "@loopback/repository";
import { UserRepository } from "../repositories/user.repository";
import { post, get, requestBody, Request, param } from "@loopback/rest";
import { User } from "../models/user";

export class UsersController {

    constructor(
        @repository(UserRepository.name) private userRepo: UserRepository
    ) { }

    @get('/users')
    async getAllUsers(): Promise<Array<User>> {
        return await this.userRepo.find();
    }


    @get('/usersID/id')
    async getAllUsersbyID(@param.path.number('id') id: number): Promise<User> {
        return await this.userRepo.findById(id);
    }

}