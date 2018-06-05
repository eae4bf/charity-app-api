import { repository } from "@loopback/repository";
import { UserRepository } from "../repositories/user.repository";
import { post, get, requestBody, HttpErrors } from "@loopback/rest";
import { User } from "../models/user";

export class RegistrationController {

  constructor(
    @repository(UserRepository.name) private userRepo: UserRepository
  ) {}

  @post('/reg/users')
  async createUser(@requestBody() user: User) {

    if (!user.username || !user.password) {
      throw new HttpErrors.BadRequest('missing data');
    }

    let userExists: boolean = !!(await this.userRepo.count({ username: user.username }));

    if (userExists) {
      throw new HttpErrors.BadRequest('user already exists');
    }

    let emailExists: boolean = !!(await this.userRepo.count({ email: user.email }));

    if (emailExists) {
      throw new HttpErrors.BadRequest('email is already registered');
    }

    return await this.userRepo.create(user);
  }

  @get('/reg/users')
  async getAllUsers(): Promise<Array<User>> {
    return await this.userRepo.find();
  }
}