import {Entity, property, model} from '@loopback/repository';

@model({
    name:"user"
})
    
export class User extends Entity {

    @property({
        type: 'number',
        id: true
    })
    user_id?: number;

    @property({
        type: 'string'
    })
    firstname: string;

    @property({
        type: 'string'
    })
    lastname: string;

    @property({
        type: 'string',
        required: true
    })
    username: string;

    @property({
        type: 'string'
    })
    email: string;

    @property({
        type: 'string',
        required: true
    })
    password: string;


    getUserId() {
        return this.user_id;
    }
} 