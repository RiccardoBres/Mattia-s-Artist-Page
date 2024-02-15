import React from 'react';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import CustomParagraph from '../../Atoms/CustomParagraph';

const WorksDropdown = ({ isOpen, toggle, categories, handleNavigation }) => (
    <div className={`d-flex align-items-center justify-content-center flex-column ${isOpen ? 'open' : 'closed'}`}>
        <div className="d-flex align-items-center">
            <CustomParagraph text='Commercial Works' onClick={toggle} className='big-p nav-links mx-2 my-0' />
            <MdOutlineKeyboardArrowDown onClick={toggle} className='arrow-down' />
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

export default WorksDropdown
