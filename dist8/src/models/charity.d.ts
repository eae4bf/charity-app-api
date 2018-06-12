import { Entity } from '@loopback/repository';
export declare class Charity extends Entity {
    id?: number;
    name: string;
    description: string;
    deepDescription: string;
    charityCardImg: string;
    charityImg: string;
    website: string;
    logo: string;
    getCharityId(): number | undefined;
}
