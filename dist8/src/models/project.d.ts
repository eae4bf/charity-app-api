import { Entity } from '@loopback/repository';
export declare class Project extends Entity {
    project_id?: number;
    charity_id: number;
    description: string;
    projectImg: string;
    getProjectId(): number | undefined;
}
