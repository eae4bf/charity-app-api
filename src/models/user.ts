import {Entity, property, model} from '@loopback/repository';

@model({
    name:"user"
})
    
export class User extends Entity {

    @property({
        type: 'number',
        id: true
    })
    id?: number;

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
        default: '1-1-2018'
    })
    dob: string;

    @property({
        type: 'string',
        required: true
    })
    password: string;


    getUserId() {
        return this.id;
    }
} 