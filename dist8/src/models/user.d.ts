import { Entity } from '@loopback/repository';
export declare class User extends Entity {
    id?: number;
    firstname: string;
    lastname: string;
    username: string;
    email: string;
    dob: string;
    password: string;
    getUserId(): number | undefined;
}
