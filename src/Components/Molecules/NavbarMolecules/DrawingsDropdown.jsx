import React from 'react';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import CustomParagraph from '../../Atoms/CustomParagraph';


const DrawingsDropdown = ({ isOpen, toggle, categories, handleNavigation }) => (
    <div className={`d-flex align-items-center justify-content-center flex-column ${isOpen ? 'open' : 'closed'}`}>
        <div className="d-flex align-items-center justify-content-between p-2">
            <CustomParagraph text='Illustration' onClick={toggle}  className='big-p nav-links my-0 mx-2' />
            <MdOutlineKeyboardArrowDown onClick={toggle} className='arrow-down' />
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

export default DrawingsDropdown
