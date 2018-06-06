import { repository } from "@loopback/repository";
import { PostRepository } from "../repositories/post.repository";
import { ProjectRepository } from "../repositories/project.repository";
import { post, get, patch, requestBody, Request, param, HttpErrors } from "@loopback/rest";
import { Post } from "../models/post";

export class PostController {

    constructor(
        @repository(PostRepository) private postRepo: PostRepository,
        @repository(ProjectRepository) private projectRepo: ProjectRepository
    ) { }

    @post('/charities/:id/projects/:id/posts')
    async createPost(@requestBody() post: Post) {

        let projectExists: boolean = !!(await this.projectRepo.count({ id:post.project_id }));

        if (!projectExists) {
          throw new HttpErrors.BadRequest(`project ID ${post.project_id} does not exist`);
        }

        return await this.postRepo.create(post);
    }


}