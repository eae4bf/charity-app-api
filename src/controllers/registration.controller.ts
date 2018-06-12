import { repository } from "@loopback/repository";
import { UserRepository } from "../repositories/user.repository";
import { post, get, requestBody, HttpErrors } from "@loopback/rest";
import { User } from "../models/user";
import * as bcrypt from 'bcrypt';

export class RegistrationController {

  constructor(
    @repository(UserRepository.name) private userRepo: UserRepository
  ) {}


  @post('/registration')
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


    let hashedPassword = await bcrypt.hash(user.password, 10);

    var userToStore = new User();
    userToStore.firstname = user.firstname;
    userToStore.lastname = user.lastname;
    userToStore.username = user.username;
    userToStore.email = user.email;
    userToStore.dob = user.dob;
    userToStore.password = hashedPassword;

    let storedUser = await this.userRepo.create(userToStore);
    storedUser.password = "";
    return storedUser;
  }

  @get('/reg/users')
  async getAllUsers(): Promise<Array<User>> {
    return await this.userRepo.find();
  }
}