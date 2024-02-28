import React from 'react';
import { useParams } from 'react-router-dom';
import CustomImage from '../../Atoms/CustomImage';
import './AnimationMolecules.css';
import CustomParagraph from '../../Atoms/CustomParagraph';
import AnimationData from './Animation';
import { Container, Row, Col } from 'react-bootstrap';
import CustomTitle from '../../Atoms/CustomTitle';

const AnimationDetails = ({ id }) => {
  const animationId = id;
  const details = AnimationData.find(animation => animation.id == animationId);
  console.log(details);
  if (!details) {
    return (
      <Container>
        <Row>
          <Col lg={12} md={12} sm={12} xs={12}>
            <div >
              <CustomParagraph text="Animation not found" />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container fluid className='animation-details'>
      <Row>
        <Col lg={12} md={12} sm={12} xs={12}>
          <div className='container-video-animation-details'>
            <video autoPlay={true} src={details.src} muted={true} key={details.id} loop={true}></video>
            <CustomTitle text={details.name} className='big-title mt-3'/>
            <CustomParagraph text={details.description} className='medium-p'/>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default AnimationDetails;
