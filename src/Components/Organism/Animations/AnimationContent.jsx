import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import './Animation.css';
import AnimationCard from '../../Molecules/AnimationMolecules/AnimationCard';


const AnimationContent = () => {
  return (
    <Container fluid className="container-films">
      <Row>
          <AnimationCard />
      </Row>
    </Container>
  )
}

export default AnimationContent
