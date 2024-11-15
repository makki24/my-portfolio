// src/pages/Contact.tsx

import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

const Contact: React.FC = () => (
    <Container className="py-5">
        <h2 className="text-center mb-4">Contact Me</h2>
        <Row className="justify-content-center">

            {/* Contact Information Section */}
            <Col md={6} lg={4} className="mb-4">
                <Card className="text-center shadow-sm">
                    <Card.Body>
                        <Card.Text>Email: <a href="mailto:syedmaqthyar@gmail.com">syedmaqthyar@gmail.com</a></Card.Text>
                        <Card.Text>
                            LinkedIn: <a href="https://www.linkedin.com/in/syedmaqthyar/" target="_blank" rel="noopener noreferrer">
                            linkedin.com/in/syedmaqthyar
                        </a>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
);

export default Contact;
