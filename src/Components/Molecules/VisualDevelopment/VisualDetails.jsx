import React from 'react';
import CustomParagraph from '../../Atoms/CustomParagraph';
import CustomTitle from '../../Atoms/CustomTitle';
import CustomImage from '../../Atoms/CustomImage';
import VisualData from './VisualData';
import './Visual.css'
import { Col, Container, Row } from 'react-bootstrap';

const VisualDetails = ({ id }) => {
    const visualDetails = VisualData.filter(visual => visual.id == id)

    return (
        <>
            <Container fluid className='container-visual-details'>
                <Row>
                    <Col lg={12} md={12} sm={12} xs={12}>
                        {
                            visualDetails.map((visual, index) => {
                                return (
                                    <div className="visual-video-container" key={index}>
                                        <video autoPlay={true} src={visual.src} muted={true} loop={true}></video>
                                        <div className="card-visual-text">
                                            <CustomTitle text={visual.name} className='very-big-title' />
                                            <CustomParagraph text={visual.description} className='medium-p' />
                                            <CustomParagraph text={visual.dateOfPublication} className='small-p' />
                                        </div>
                                        <div className="card-related-images">
                                            {visual.images.map((image, idx) => (
                                                <CustomImage
                                                    src={image}
                                                    alt={`Image ${idx}`}
                                                    className='related-image'
                                                    key={idx}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default VisualDetails;

