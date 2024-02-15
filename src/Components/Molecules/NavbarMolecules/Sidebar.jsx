import React, { useState } from 'react';
import CustomParagraph from '../../Atoms/CustomParagraph';
import CustomButton from '../../Atoms/CustomButton';
import './NavMolecules.css';
import { FaInstagram, FaFacebook, FaArrowDown } from 'react-icons/fa';
import WorkData from '../../Molecules/WorksMolecules/WorksData';
import DrawingData from '../../Molecules/DrawingMolecules/DrawingData';
import { useNavigate } from 'react-router-dom';
import { GiEarthAsiaOceania } from "react-icons/gi";
import WorksDropdown from './WorksDropdown';
import DrawingsDropdown from './DrawingsDropdown';


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
                <CustomButton className='button-nav sidebar-logo' onClick={toggle} text={<GiEarthAsiaOceania />} />
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
