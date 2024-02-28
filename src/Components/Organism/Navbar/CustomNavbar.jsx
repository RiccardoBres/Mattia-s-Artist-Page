import React from 'react';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import NavLogo from '../../Molecules/NavbarMolecules/NavLogo';
import Sidebar from '../../Molecules/NavbarMolecules/Sidebar';
import './Navbar.css';

const CustomNavbar = () => {
    return (
        <div className="container-navbar">
            <div className="container-navbar-content-full">
                <NavLogo />
                <Sidebar />
            </div>
        </div>
    );
}

export default CustomNavbar;


/*  <Navbar className="navbar container-navbar">
             <Container className='container-navbar-content'>
                 <Navbar.Brand href="/">  <NavLogo /></Navbar.Brand>
                 <Navbar.Toggle />
                 <Navbar.Collapse >
                     <Navbar.Text>
                         <Sidebar />
                     </Navbar.Text>
                 </Navbar.Collapse>
             </Container>
         </Navbar> */

