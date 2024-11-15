// src/pages/ProjectDetail.tsx

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, ListGroup, Spinner } from 'react-bootstrap';
import { fetchProjects } from '../services/projectService';

interface Project {
    id: string;
    title: string;
    duration: string;
    description: string;
    technologies: string[];
}

const ProjectDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [project, setProject] = useState<Project | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getProject = async () => {
            const data = await fetchProjects();
            const foundProject = (data as Project[]).find((proj) => proj.id === id);
            setProject(foundProject || null);
            setLoading(false);
        };
        getProject();
    }, [id]);

    if (loading) {
        return (
            <Spinner animation="border" role="status" className="d-block mx-auto">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        );
    }

    if (!project) {
        return <p>Project not found.</p>;
    }

    return (
        <Container className="py-5">
            <h2 className="text-start">{project.title}</h2>
            <p className="text-start"><strong>Duration:</strong> {project.duration}</p>
            <p className="text-start">{project.description}</p>
            <h4 className="text-start">Technologies Used</h4>
            <ListGroup className="text-start">
                {project.technologies.map((tech, index) => (
                    <ListGroup.Item key={index}>{tech}</ListGroup.Item>
                ))}
            </ListGroup>
        </Container>
    );
};

export default ProjectDetail;
