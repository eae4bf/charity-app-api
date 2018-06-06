import { Entity } from '@loopback/repository';
export declare class User extends Entity {
    user_id?: number;
    firstname: string;
    lastname: string;
    username: string;
    email: string;
    password: string;
    getUserId(): number | undefined;
}
