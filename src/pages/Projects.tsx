import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button, Spinner, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { fetchProjects } from '../services/projectService';
import { Project } from "../data/projectsData";

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
            <h2 className="text-start mb-4">Projects</h2>
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
                                    <div>
                                        {project.technologies.slice(0, 4).map((tech, index) => (
                                            <Badge bg="info" className="me-2 mb-2" key={index}>
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                    <Card.Text>{project.description.slice(0, 100)}...</Card.Text>
                                    {/* Skills/Technologies Badges */}

                                </Card.Body>
                                <Card.Footer>
                                    {project.clientProject && (
                                        <Badge bg="warning" className="ms-2 float-start">
                                            Client Project
                                        </Badge>
                                    )}
                                    <Link to={`/projects/${project.id}`} className="float-end">
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
