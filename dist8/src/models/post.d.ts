import { Entity } from '@loopback/repository';
export declare class Post extends Entity {
    post_id?: number;
    name: string;
    description: string;
    project_id: number;
    getPostId(): number | undefined;
}
