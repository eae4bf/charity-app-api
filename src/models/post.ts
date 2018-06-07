import {Entity, property, model} from '@loopback/repository';

@model()
export class Post extends Entity {
    
    @property({
        type: 'number',
        id: true
    })
    id?: number;

    @property({
        type: 'string'
    })
    title: string;

    @property({
        type: 'string'
    })
    description: string;

    @property({
        type: 'string'
    })
    postImg: string;

    @property({
        type: 'string'
    })
    date: Date;

    @property({
        type: 'number',
        id: true
    })
    project_id: number;

    getPostId() {
        return this.id;
    }


}