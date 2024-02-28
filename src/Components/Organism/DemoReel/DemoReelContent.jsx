import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import './demoReel.css';
import CustomTitle from '../../Atoms/CustomTitle';

const DemoReelContent = () => {
    return (
        <Container fluid className='demo-reel-container'>
            <Row>
                <Col lg={12} md={12} sm={12} xs={12}>
                    <div className="container-demo-video">
                        <iframe
                            src="https://player.vimeo.com/video/651771461"
                            frameborder="0"
                            allow="autoplay; fullscreen; picture-in-picture"
                            allowfullscreen
                        ></iframe>
                        <CustomTitle text="Demo Reel 2021" className="demo-reel-title" />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default DemoReelContent;
