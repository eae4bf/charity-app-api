import { repository } from "@loopback/repository";
import { UserRepository } from "../repositories/user.repository";
import { post, get, requestBody } from "@loopback/rest";
import { User } from "../models/user";

export class RegistrationController {

  constructor(
    @repository(UserRepository.name) private userRepo: UserRepository
  ) {}

  @post('/reg/users')
  async createUser(@requestBody() user: User) {
    return await this.userRepo.create(user);
  }

  @get('/reg/users')
  async getAllUsers(): Promise<Array<User>> {
    return await this.userRepo.find();
  }
}