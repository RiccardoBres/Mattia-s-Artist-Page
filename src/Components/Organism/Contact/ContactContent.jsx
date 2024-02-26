import React from 'react';
import './contact.css';
import { Container, Col, Row } from 'react-bootstrap';
import ContactForm from '../../Molecules/ContactMolecules/ContactForm';
import CustomTitle from '../../Atoms/CustomTitle';
import CustomParagraph from '../../Atoms/CustomParagraph';

const ContactContent = () => {
    return (
        <Container fluid className='contact-container'>
            <Row>
                <Col lg={12} md={12} sm={12} className='contact-col'>
                    <ContactForm />
                </Col>
            </Row>
        </Container>
    )
}

export default ContactContent
