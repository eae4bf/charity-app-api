import { PaymentMethodRepository } from "../repositories/payment-method.repository";
import { UserRepository } from "../repositories/user.repository";
import { AddressRepository } from "../repositories/address.repository";
import { PaymentMethod } from "../models/payment-method";
export declare class PaymentMethodController {
    private paymentMethodRepo;
    private userRepo;
    private addressRepo;
    constructor(paymentMethodRepo: PaymentMethodRepository, userRepo: UserRepository, addressRepo: AddressRepository);
    getAllPaymentMethods(): Promise<Array<PaymentMethod>>;
    createPaymentMethod(paymentMethod: PaymentMethod): Promise<PaymentMethod>;
}
