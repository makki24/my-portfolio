import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, ListGroup, Spinner, Carousel } from 'react-bootstrap';
import { fetchProjects } from '../services/projectService';
import {Project} from "../data/projectsData";

const ProjectDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [project, setProject] = React.useState<Project | null>(null);

    React.useEffect(() => {
        const getProject = async () => {
            const data = await fetchProjects();
            const foundProject = data.find((proj: Project) => proj.id === id);
            setProject(foundProject || null);
        };
        getProject();
    }, [id]);

    if (!project) return <p>Loading...</p>;

    return (
        <Container className="py-5">
            <h2 className="text-start">{project.title}</h2>
            <p className="text-start"><strong>Duration:</strong> {project.duration}</p>
            <p className="text-start">{project.description}</p>
            {project.youtubeUrl && (
                <div className="ratio ratio-21x9">
                    <iframe src={project.youtubeUrl} title="YouTube video" allowFullScreen></iframe>
                </div>
            )}

            {project.images && project.images.length > 0 && (
                <Carousel className="my-4">
                    {project.images.map((image, index) => (
                        <Carousel.Item key={index}>
                            <img
                                className="d-block w-100"
                                src={image}
                                alt={`Screenshot ${index + 1}`}
                                style={{
                                    maxHeight: '400px', // Limit the height
                                    objectFit: 'contain' // Maintain aspect ratio
                                }}
                            />
                        </Carousel.Item>
                    ))}
                </Carousel>
            )}
            <h4 className="text-start mt-4">My Contributions</h4>
            <ListGroup className="text-start">
                {project.tasks?.map((task, index) => (
                    <ListGroup.Item key={index}>{task}</ListGroup.Item>
                ))}
            </ListGroup>

            <h4 className="text-start mt-4">Technologies Used</h4>
            <ListGroup className="text-start">
                {project.technologies.map((tech, index) => (
                    <ListGroup.Item key={index}>{tech}</ListGroup.Item>
                ))}
            </ListGroup>
        </Container>
    );
};

export default ProjectDetail;
