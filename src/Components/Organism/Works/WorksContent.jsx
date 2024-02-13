import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import './Works.css';
import WorksInfo from '../../Molecules/WorksMolecules/WorksInfo';


const FilmsContent = () => {
    return (
        <Container fluid className="container-Works">
            <Row>
                <Col>
                    <WorksInfo />
                </Col>
            </Row>
        </Container>
    )
}

export default FilmsContent
