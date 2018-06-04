import { repository } from "@loopback/repository";
import { UserRepository } from "../repositories/user.repository";
import { post, get, requestBody } from "@loopback/rest";
import { User } from "../models/user";

export class UsersController {

  constructor(
    @repository(UserRepository.name) private userRepo: UserRepository
  ) {}

  @get('/users')
  async getAllUsers(): Promise<Array<User>> {
    return await this.userRepo.find();
  }

//   @get('/users')
//   async getAllUsersbyID(@requestBody() id: number): Promise<Array<User>> {
//     return await this.userRepo.findById(user.id
//   }
}