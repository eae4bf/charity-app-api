import { repository } from "@loopback/repository";
import { UserRepository } from "../repositories/user.repository";
import { post, get, requestBody } from "@loopback/rest";
import { User } from "../models/user";
import { Login } from "../models/login";

export class LoginController {

  constructor(
    @repository(UserRepository.name) private userRepo: UserRepository
  ) { }

  @post('/login/users')
  async sendLogin(@requestBody() user: User) {
    return await this.userRepo.create(user);
  }

  @get('/login/users')
  async getAllUsers(): Promise<Array<User>> {
    return await this.userRepo.find();
  }

  @post("/login")
  async login(@requestBody() login: Login) {
    var users = await this.userRepo.find();
    var username = login.username;
    var password = login.password;

    var i;
    for (i = 0; i < users.length; i++) {
      var user = users[i];
      if (user.username === username && user.password === password) {
        return user;
      }
    }

    return "Username or password is incorrect"

  }


}