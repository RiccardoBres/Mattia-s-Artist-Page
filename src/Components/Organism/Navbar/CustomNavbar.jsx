import React from 'react';
import { Container, Row, Col, Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';
import NavLogo from '../../Molecules/NavbarMolecules/NavLogo';
import Sidebar from '../../Molecules/NavbarMolecules/Sidebar';
import './Navbar.css';

const CustomNavbar = () => {
    return (
        <BootstrapNavbar expand="lg" className="navbar">
            <Container fluid className="container-navbar">
                <NavLogo />
                <Sidebar />
            </Container>
        </BootstrapNavbar>
    );
}

export default CustomNavbar;
