import React from 'react';
import { Container, Row, Col, Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';
import NavLogo from '../../Molecules/NavbarMolecules/NavLogo';
import Sidebar from '../../Molecules/NavbarMolecules/Sidebar';
import './Navbar.css';

const CustomNavbar = () => {
    return (
        <BootstrapNavbar expand="lg" className="navbar container-navbar">
            <Container fluid className='container-navbar-content'>
                <Row className='w-100' >
                    <Col lg={6} md={6} sm={12}>
                        <NavLogo />
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                        <Sidebar />
                    </Col>
                </Row>
            </Container>
        </BootstrapNavbar>
    );
}

export default CustomNavbar;
