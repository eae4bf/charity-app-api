import { repository } from "@loopback/repository";
import { UserRepository } from "../repositories/user.repository";
import { post, get, del, patch, requestBody, Request, param, HttpErrors } from "@loopback/rest";
import { User } from "../models/user";
import {sign, verify} from 'jsonwebtoken';

import * as bcrypt from 'bcrypt';

export class UsersController {

    constructor(
        @repository(UserRepository.name) private userRepo: UserRepository
    ) { }


    @get('/users')
    async getAllUsers(): Promise<Array<User>>  { 
        return await this.userRepo.find();
    }


    @get('/users')
    async getUserbyKey(@param.query.string('jwt') jwt: string) {
        if (!jwt) throw new HttpErrors.Unauthorized('JWT token is required.');

        try {
          var jwtBody = verify(jwt, 'shh');
          console.log(jwtBody);
          return jwtBody;
        } 
        catch (err) {
          throw new HttpErrors.BadRequest('JWT token invalid');
        }
    }


    @get('/usersID/{id}')
    async getAllUsersbyID(@param.path.number('id') id: number): Promise<User> {
        
        let userExists: boolean = !!(await this.userRepo.count({ id }));

        if (!userExists) {
          throw new HttpErrors.BadRequest(`user ID ${id} does not exist`);
        }

        return await this.userRepo.findById(id);
    }

    @del('/users')
    async deleteUserbyID(@param.path.number('id') id: number) {
        let userExists: boolean = !!(await this.userRepo.count({ id }));
        if (userExists) {
          this.userRepo.deleteById(id);

        }
        else {
            throw new HttpErrors.BadRequest(`user ID ${id} does not exist`);
        }
    }

    @patch('/user/{id}')
    async updateUserById(
      @param.path.number('id') id: number,
      @requestBody() user: User,
    ): Promise<boolean> {
      id = +id;
      return await this.userRepo.updateById(id, user);
    }

    // @get('users/{id}/donations') 
    // async getDonationsByUserId(
    //     @param.path.number('id') id: number,   
    //     @param.query.date('date_from') dateFrom: Date,   
    // ) {

    // }
}