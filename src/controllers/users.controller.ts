import { repository } from "@loopback/repository";
import { UserRepository } from "../repositories/user.repository";
import { post, get, patch, requestBody, Request, param, HttpErrors } from "@loopback/rest";
import { User } from "../models/user";

export class UsersController {

    constructor(
        @repository(UserRepository.name) private userRepo: UserRepository
    ) { }

    @get('/users')
    async getAllUsers(): Promise<Array<User>> {
        return await this.userRepo.find();
    }


    @get('/usersID/{id}')
    async getAllUsersbyID(@param.path.number('id') id: number): Promise<User> {
        
        let userExists: boolean = !!(await this.userRepo.count({ id }));

        if (!userExists) {
          throw new HttpErrors.BadRequest(`user ID ${id} does not exist`);
        }

        return await this.userRepo.findById(id);
    }

    @post('/users')
    async deleteUserbyID(@param.path.number('id') id: number) {

        let userDeleted: boolean = false;

        let userExists: boolean = !!(await this.userRepo.count({ id }));

        if (userExists) {
          this.userRepo.deleteById(id);
          userDeleted = true;
        }
        else {
            throw new HttpErrors.BadRequest(`user ID ${id} does not exist`);
        }
        return userDeleted;
    }

    @patch('/user/{id}')
    async updateUserById(
      @param.path.number('id') id: number,
      @requestBody() user: User,
    ): Promise<boolean> {
      id = +id;
      return await this.userRepo.updateById(id, user);
    }

    @get('users/{id}/donations') 
    async getDonationsByUserId(
        @param.path.number('id') id: number,   
        @param.query.date('date_from') dateFrom: Date,   
    ) {

    }
}