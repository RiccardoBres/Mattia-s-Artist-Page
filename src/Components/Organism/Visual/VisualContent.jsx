import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import './Visual.css';
import VisualCard from '../../Molecules/VisualDevelopment/VisualCard';


const VisualContent = () => {
  return (
    <Container className="container-visual">
      <Row>
          <VisualCard />
      </Row>
    </Container>
  )
}

export default VisualContent
