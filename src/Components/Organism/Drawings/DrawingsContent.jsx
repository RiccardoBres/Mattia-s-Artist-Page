import React from 'react';
import './Drawings.css';
import { Container, Row, Col } from'react-bootstrap';
import DrawingCarousel from '../../Molecules/DrawingMolecules/DrawingCarousel';

const DrawingsContent = () => {
  return (
    <div className='container-drawings'>
            <DrawingCarousel/>
    </div>
  )
}

export default DrawingsContent
