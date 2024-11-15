// src/pages/Projects.tsx

import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { fetchProjects } from '../services/projectService';

interface Project {
    id: string;
    title: string;
    duration: string;
    description: string;
    technologies: string[];
}

const Projects: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getProjects = async () => {
            const data = await fetchProjects();
            setProjects(data as Project[]);
            setLoading(false);
        };
        getProjects();
    }, []);

    return (
        <Container className="py-5">
            <h2 className="text-center mb-4">Projects</h2>
            {loading ? (
                <Spinner animation="border" role="status" className="d-block mx-auto">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            ) : (
                <Row>
                    {projects.map((project) => (
                        <Col md={4} className="mb-4" key={project.id}>
                            <Card className="h-100 shadow-sm">
                                <Card.Body>
                                    <Card.Title>{project.title}</Card.Title>
                                    <Card.Text><strong>Duration:</strong> {project.duration}</Card.Text>
                                    <Card.Text>{project.description.slice(0, 100)}...</Card.Text> {/* Short description */}
                                </Card.Body>
                                <Card.Footer>
                                    <Link to={`/projects/${project.id}`} className={"float-end"}>
                                        <Button variant="primary">View Details</Button>
                                    </Link>
                                </Card.Footer>
                            </Card>
                        </Col>
                    ))}
                    <span>Many more to be added...</span>
                </Row>
            )}
        </Container>
    );
};

export default Projects;
