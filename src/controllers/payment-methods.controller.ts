import { repository } from "@loopback/repository";
import { PaymentMethodRepository } from "../repositories/payment-method.repository";
import { UserRepository } from "../repositories/user.repository";
import { post, get, patch, requestBody, Request, param, HttpErrors } from "@loopback/rest";
import { AddressRepository } from "../repositories/address.repository";
import { PaymentMethod } from "../models/payment-method";


export class PaymentMethodController {

    constructor(
        @repository(PaymentMethodRepository) private paymentMethodRepo: PaymentMethodRepository,
        @repository(UserRepository) private userRepo: UserRepository,
        @repository(AddressRepository) private addressRepo: AddressRepository
    ) { }

    @get('/payment-methods')
    async getAllPaymentMethods(): Promise<Array<PaymentMethod>> {
        return await this.paymentMethodRepo.find();
    }

    @post('/reg/payment-methods')
    async createPaymentMethod(@requestBody() paymentMethod: PaymentMethod) {

        let userExists: boolean = !!(await this.userRepo.count({ id:paymentMethod.user_id }));

        if (!userExists) {
          throw new HttpErrors.BadRequest(`user ID ${paymentMethod.user_id} does not exist`);
        }

        return await this.paymentMethodRepo.create(paymentMethod);
    }

}