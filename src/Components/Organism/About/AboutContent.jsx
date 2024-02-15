import React from 'react';
import { Col, Row, Container } from'react-bootstrap';
import AboutDescription from '../../Molecules/AboutMolecules/AboutDescription';
import './about.css';

const AboutContent = () => {
  return (
    <Container fluid className="container-about">
        <Row>
            <Col lg={6} md={12} sm={12} xs={12}>
                <AboutDescription/>
            </Col>
        </Row>
    </Container>
  )
}

export default AboutContent