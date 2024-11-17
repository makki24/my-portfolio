// src/services/projectService.ts

import {Project, projects} from '../data/projectsData';

export const fetchProjects = async (): Promise<Project[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(projects);
        }, 500); // Simulate network delay
    });
};
