import {Entity, property, model} from '@loopback/repository';

@model()
export class Project extends Entity {
    
    @property({
        type: 'number',
        id: true
    })
    id?: number;

    @property({
        type: 'number',
        id: true
    })
    charity_id: number;

    @property({
        type: 'string',
    })
    title: string;

    @property({
        type: 'string',
    })
    description: string;

    @property({
        type: 'string',
    })
    projectImg: string;
  
    
    getProjectId() {
        return this.id;
    }
}
