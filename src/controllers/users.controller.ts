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


    @get('/usersID/{user_id}')
    async getAllUsersbyID(@param.path.number('cuser_id') user_id: number): Promise<User> {
        
        let userExists: boolean = !!(await this.userRepo.count({ user_id }));

        if (!userExists) {
          throw new HttpErrors.BadRequest(`user ID ${user_id} does not exist`);
        }

        return await this.userRepo.findById(user_id);
    }

    @post('/users')
    async deleteUserbyID(@param.path.number('user_id') user_id: number) {

        let userDeleted: boolean = false;

        let userExists: boolean = !!(await this.userRepo.count({ user_id }));

        if (userExists) {
          this.userRepo.deleteById(user_id);
          userDeleted = true;
        }
        else {
            throw new HttpErrors.BadRequest(`user ID ${user_id} does not exist`);
        }
        return userDeleted;
    }

    // @patch('/users')
    // async changeUserPassword(@param.path.string('password') newPassword: string) {
    //     "password": newPassword
    // }


    @get('users/{user_id}/donations') 
    async getDonationsByUserId(
        @param.path.number('user_id') id: number,   
        @param.query.date('date_from') dateFrom: Date,   
    ) {
        console.log(id)
        console.log(dateFrom)
        console.log('donation')
    }



}