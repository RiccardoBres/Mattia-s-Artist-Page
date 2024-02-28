import React, { useState } from 'react';
import CustomParagraph from '../../Atoms/CustomParagraph';
import CustomButton from '../../Atoms/CustomButton';
import CustomTitle from '../../Atoms/CustomTitle';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import WorkData from '../../Molecules/WorksMolecules/WorksData';
import DrawingData from '../../Molecules/DrawingMolecules/DrawingData';
import { useNavigate } from 'react-router-dom';
import { AiOutlineMenu } from "react-icons/ai";
import './NavMolecules.css';

const Sidebar = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const handleNavigation = (path) => {
        navigate(path);
        setIsOpen(false);
    }

    return (
        <>
            <div className="container-log">
                <CustomButton className={`sidebar-logo ${isOpen ? 'empty-button-nav' : 'button-nav'}`} onClick={toggle} text={<AiOutlineMenu />} />
            </div>
            <div className={`sidebar ${isOpen ? 'expanded' : ''}`}>
                <div className="content-sidebar ">
                    <div className="content-links">
                        <CustomTitle
                            text='ABOUT'
                            className='small-title small-title-nav nav-links10'
                            onClick={() => handleNavigation('/')}
                        />
                        {[
                            'DEMO REEL',
                            'ANIMATION',
                            'VISUAL DEVELOPMENT',
                            'COMMERCIAL WORK',
                            'PERSONAL',
                            'ILLUSTRATION',
                            'SKETCHES',
                            'COMIC',
                            'ACADEMICAL',
                            'SHOP',
                            'CONTACT ME'
                        ].map((title, index) => (
                            <CustomTitle
                                key={index}
                                text={title}
                                className={`small-title small-title-nav nav-links${index + 1}`}
                                onClick={() => handleNavigation(`/${title.toLowerCase().replace(' ', '-')}`)}
                            />

                        ))}
                        <div className="container-social-icons">
                            {[<FaInstagram key="instagram1" className='social-icon' />, <FaFacebook key="facebook1" className='social-icon' />, <FaInstagram key="instagram2" className='social-icon' />, <FaFacebook key="facebook2" className='social-icon' />]}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Sidebar;
