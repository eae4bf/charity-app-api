import {Entity, property, model} from '@loopback/repository';

@model()
export class Charity extends Entity {
  
    @property({
        type: 'number',
        id: true
    })
    charity_id?: number;

    @property({
        type: 'string',
        required: true
    })
    name: string;

    @property({
        type: 'string',
    })
    description: string;

    @property({
        type: 'string',
    })
    deepDescription: string;

    @property({
        type: 'string',
    })
    charityCardImg: string;

    @property({
        type: 'string',
    })
    charityImg: string;

    @property({
        type: 'string',
    })
    website: string;

    @property({
        type: 'string',
    })
    logo: string;

    getCharityId() {
        return this.charity_id;
    }
}