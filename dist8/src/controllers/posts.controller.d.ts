import { PostRepository } from "../repositories/post.repository";
import { ProjectRepository } from "../repositories/project.repository";
import { Post } from "../models/post";
export declare class UsersController {
    private postRepo;
    private projectRepo;
    constructor(postRepo: PostRepository, projectRepo: ProjectRepository);
    createPost(post: Post): Promise<Post>;
}
