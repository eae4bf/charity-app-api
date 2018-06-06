import { ProjectRepository } from "../repositories/project.repository";
import { Project } from "../models/project";
import { CharityRepository } from "../repositories/charity.repository";
export declare class ProjectController {
    private projectRepo;
    private charityRepo;
    constructor(projectRepo: ProjectRepository, charityRepo: CharityRepository);
    getAllProjects(): Promise<Array<Project>>;
    getAllProjectsbyID(project_id: number): Promise<Project>;
}
