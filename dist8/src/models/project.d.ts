import { Entity } from '@loopback/repository';
export declare class Project extends Entity {
    id?: number;
    charity_id: number;
    title: string;
    description: string;
    projectImg: string;
    getProjectId(): number | undefined;
}
