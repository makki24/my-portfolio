// src/pages/About.tsx

import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';

const About: React.FC = () => (
    <Container fluid className="about-section py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <Container>
            <h2 className="text-center mb-4">About Me</h2>
            <Row className="align-items-center">

                {/* Left Column - Image */}
                <Col md={5} className="text-center mb-4 mb-md-0">
                    <Image
                        src="https://avatars.githubusercontent.com/u/56727072?v=4"
                        alt="Your Name"
                        roundedCircle
                        fluid
                        style={{ maxWidth: '80%', height: 'auto' }}
                    />
                </Col>

                {/* Right Column - Text Content */}
                <Col md={7}>
                    <Card className="shadow-sm border-0 p-4">
                        <Card.Body className={"text-start"}>
                            <Card.Text className="align-text-left">
                                Hello! I'm a passionate developer with experience in building full-stack applications. Skilled in Java, Angular, and React,
                                I have a strong foundation in web development and enjoy solving complex challenges. My journey in tech has been driven by a love
                                for coding, learning new technologies, and building impactful projects.
                            </Card.Text>
                            <Card.Title className="mt-4">Skills</Card.Title>
                            <Card.Text>
                                - Java & Spring Boot<br />
                                - Angular<br />
                                - React.js & React Native<br />
                                - GitHub & GitHub Actions<br />
                                - MySQL & MongoDB
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </Container>
);

export default About;
