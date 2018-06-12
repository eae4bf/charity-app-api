import { Entity } from '@loopback/repository';
export declare class Post extends Entity {
    id?: number;
    title: string;
    description: string;
    postImg: string;
    date: Date;
    project_id: number;
    getPostId(): number | undefined;
}
