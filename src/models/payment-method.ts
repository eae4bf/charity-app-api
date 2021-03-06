import {Entity, property, model} from '@loopback/repository';

@model()
export class PaymentMethod extends Entity {
    
    @property({
        type: 'number',
        id: true
    })
    id?: number;

    @property({
        type: 'number',
    })
    cardNumber: number;

    @property({
        type: 'number',
        id: true
    })
    user_id: number;

    @property({
        type: 'string',
    })
    cardHolderName: string;

    @property({
        type: 'string',
    })
    CVV: string;

    @property({
        type: 'string',
    })
    cardType: string;

    @property({
        type: 'string',
    })
    expirationDate: string;

    @property({
        type: 'number',
        id: true
    })
    address_id: number;

    getPaymentMethodId() {
        return this.id;
    }



}