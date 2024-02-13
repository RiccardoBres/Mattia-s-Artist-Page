import { useState } from 'react';
import CustomParagraph from '../../Atoms/CustomParagraph';
import CustomButton from '../../Atoms/CustomButton';
import './NavMolecules.css';
import { FaInstagram, FaFacebook, FaArrowDown } from 'react-icons/fa';
import WorkData from '../../Molecules/WorksMolecules/WorksData';
import { useNavigate } from 'react-router-dom';

import { AiFillLayout } from 'react-icons/ai';

const Sidebar = () => {
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false);
    const [isLinkOpen, setIsLinkOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    const linkToggle = () => setIsLinkOpen(!isLinkOpen);



    const handleHome = () => {
        navigate('/')
    }
    const handleFilm = () => {
        navigate('/films')
    }
    const handleWorks = () => {
        navigate('/works')
        console.log('ciaoo');
    }
    return (
        <>
            <div className="container-log">
                <CustomButton className='button-nav sidebar-logo' onClick={toggle} text={<AiFillLayout />} />
            </div>
            <div className={`sidebar ${isOpen ? 'expanded' : ''}`}>
                <div className="content-sidebar ">
                    <div className="content-links">
                        <CustomParagraph text='About' onClick={handleHome} className='big-p nav-links' />
                        <CustomParagraph text='Films' className='big-p nav-links' onClick={handleFilm} />
                        <div className="d-flex align-items-center justify-content-center flex-column">
                            <div className="d-flex align-items-center">
                                <CustomParagraph text='Commercial Works' className='big-p nav-links mx-2 my-0' />
                                <FaArrowDown onClick={linkToggle} className='arrow-down' />
                            </div>
                            {isLinkOpen ? (
                                WorkData.map((work, index) => (
                                    <>
                                        <div key={index} onClick={handleWorks}>
                                            <CustomParagraph
                                                key={index}
                                                text={work.name}
                                                className='small-p nav-links-works'
                                                onClick={handleWorks}
                                            />
                                        </div>

                                    </>

                                ))
                            ) : null}
                        </div>
                        <CustomParagraph text='Drawing' className='big-p nav-links' />
                        <CustomParagraph text='Contacts' className='big-p nav-links' />
                    </div>
                    <div className="container-social-icons">
                        <FaInstagram className='social-icon' />
                        <FaFacebook className='social-icon' />
                    </div>
                </div>
            </div>
        </>

    )
}

export default Sidebar
