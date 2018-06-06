import { Entity } from '@loopback/repository';
export declare class Donation extends Entity {
    donation_id?: number;
    user_id: number;
    charity_id: number;
    amount: number;
    date: string;
    getDonationId(): number | undefined;
}
