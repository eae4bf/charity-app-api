import { repository } from "@loopback/repository";
import { ProjectRepository } from "../repositories/project.repository";
import { post, get, requestBody, Request, param, HttpErrors } from "@loopback/rest";
import { Project } from "../models/project";
import { Charity } from "../models/charity";
import { CharityRepository } from "../repositories/charity.repository";

export class ProjectController {
    constructor(
        @repository(ProjectRepository) private projectRepo: ProjectRepository,
        @repository(CharityRepository) private charityRepo: CharityRepository
    ){
    }

    @get('/charities/:id/projects')
    async getAllProjects(): Promise<Array<Project>> {
        return await this.projectRepo.find();
    }

    @get('/charities/:id/projects/:id')
    async getAllProjectsbyID(@param.path.number('project_id') project_id: number): Promise<Project> {
        let projectExists: boolean = !!(await this.projectRepo.count({ project_id }));

        if (!projectExists) {
            throw new HttpErrors.BadRequest(`project ID ${project_id} does not exist`);
        }

        return await this.projectRepo.findById(project_id);
    }


}