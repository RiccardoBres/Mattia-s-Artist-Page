import React, { useState } from 'react';
import CustomParagraph from '../../Atoms/CustomParagraph';
import CustomButton from '../../Atoms/CustomButton';
import './NavMolecules.css';
import { FaInstagram, FaFacebook, FaArrowDown } from 'react-icons/fa';
import WorkData from '../../Molecules/WorksMolecules/WorksData';
import DrawingData from '../../Molecules/DrawingMolecules/DrawingData';
import { useNavigate } from 'react-router-dom';
import { AiFillLayout } from 'react-icons/ai';

// Componente per il dropdown dei Commercial Works
const WorksDropdown = ({ isOpen, toggle, categories, handleNavigation }) => (
    <div className={`d-flex align-items-center justify-content-center flex-column ${isOpen ? 'open' : 'closed'}`}>
        <div className="d-flex align-items-center">
            <CustomParagraph text='Commercial Works' className='big-p nav-links mx-2 my-0' />
            <FaArrowDown onClick={toggle} className='arrow-down' />
        </div>
        {isOpen && categories.map((category, index) => (
            <CustomParagraph
                key={index}
                text={category.name}
                className='small-p nav-links-works'
                onClick={() => handleNavigation('/works/')}
            />
        ))}
    </div>
);

// Componente per il dropdown dei Disegni
const DrawingsDropdown = ({ isOpen, toggle, categories, handleNavigation }) => (
    <div className={`d-flex align-items-center justify-content-center flex-column ${isOpen ? 'open' : 'closed'}`}>
        <div className="d-flex align-items-center">
            <CustomParagraph text='Drawing' className='big-p nav-links' />
            <FaArrowDown onClick={toggle} className='arrow-down' />
        </div>
        {isOpen && categories.map((category, index) => (
            <CustomParagraph
                key={index}
                text={category.category}
                className='small-p nav-links-works'
                onClick={() => handleNavigation(`/drawing/${category.category}`)}
            />
        ))}
    </div>
);

const Sidebar = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [isWorksOpen, setIsWorksOpen] = useState(false);
    const [isDrawingOpen, setIsDrawingOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    const worksToggle = () => setIsWorksOpen(!isWorksOpen);
    const drawingToggle = () => setIsDrawingOpen(!isDrawingOpen);

    const handleNavigation = (path) => navigate(path);

    return (
        <>
            <div className="container-log">
                <CustomButton className='button-nav sidebar-logo' onClick={toggle} text={<AiFillLayout />} />
            </div>
            <div className={`sidebar ${isOpen ? 'expanded' : ''}`}>
                <div className="content-sidebar ">
                    <div className="content-links">
                        <CustomParagraph text='About' onClick={() => handleNavigation('/')} className='big-p nav-links' />
                        <CustomParagraph text='Films' className='big-p nav-links' onClick={() => handleNavigation('/films')} />
                        <WorksDropdown
                            isOpen={isWorksOpen}
                            toggle={worksToggle}
                            categories={WorkData}
                            handleNavigation={handleNavigation}
                        />
                        <DrawingsDropdown
                            isOpen={isDrawingOpen}
                            toggle={drawingToggle}
                            categories={DrawingData}
                            handleNavigation={handleNavigation}
                        />
                        <CustomParagraph text='Contacts' className='big-p nav-links' />
                    </div>
                    <div className="container-social-icons">
                        <FaInstagram className='social-icon' />
                        <FaFacebook className='social-icon' />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Sidebar;
