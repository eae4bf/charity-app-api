import { repository } from "@loopback/repository";
import { UserRepository } from "../repositories/user.repository";
import { post, get, requestBody, HttpErrors, param } from "@loopback/rest";
import { User } from "../models/user";
import { Login } from "../models/login";
import { sign, verify } from 'jsonwebtoken';

export class LoginController {

  constructor(
    @repository(UserRepository.name) private userRepo: UserRepository
  ) { }


  @post("/login")
  async login(@requestBody() login: Login) {

    if (!login.username || !login.password) {
      throw new HttpErrors.Unauthorized('invalid');
    }

    let userExists: boolean = !!(await this.userRepo.count({
      and: [
        { username: login.username },
        { password: login.password },
      ],
    }));

    if (!userExists) {
      throw new HttpErrors.Unauthorized('invalid');
    }

    var currentUser = await this.userRepo.findOne({
      where: {
        and: [
          { email: login.email },
          { password: login.password }
        ],
      },
    });
    var jwt = sign(
      {
        user: currentUser,
      },
      'shh',
      {
        issuer: 'auth.ix.co.za',
        audience: 'ix.co.za',
      },
    );

    return {
      token: jwt,
    };

    // throw new HttpErrors.Unauthorized('User not found, sorry!');
    // //return "Error";
  }


  @post('/login-with-query')
  async loginWithQuery(@requestBody() login: Login): Promise<User> {
    var users = await this.userRepo.find({
      where: {
        and: [{ email: login.email }, { password: login.password }],
      },
    });

    if (users.length == 0) {
      throw new HttpErrors.NotFound('User not found, sorry!');
    }

    return users[0];
  }


}