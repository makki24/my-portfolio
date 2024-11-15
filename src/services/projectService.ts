// src/services/projectService.ts

import { projects } from '../data/projectsData';

export const fetchProjects = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(projects);
        }, 500); // Simulate network delay
    });
};
