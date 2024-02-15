import React from 'react';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import NavLogo from '../../Molecules/NavbarMolecules/NavLogo';
import Sidebar from '../../Molecules/NavbarMolecules/Sidebar';
import './Navbar.css';

const CustomNavbar = () => {
    return (

        <Navbar className="navbar container-navbar">
            <Container className='container-navbar-content'>
                <Navbar.Brand href="/">  <NavLogo /></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <Sidebar />
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CustomNavbar;

