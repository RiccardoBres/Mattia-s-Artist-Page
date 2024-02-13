import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import './Films.css';
import VideoCard from '../../Molecules/FilmsMolecules/VideoCard';


const FilmsContent = () => {
  return (
    <Container fluid className="container-films">
      <Row>
        <Col className='col-films'>
          <VideoCard />
        </Col>
      </Row>
    </Container>
  )
}

export default FilmsContent
