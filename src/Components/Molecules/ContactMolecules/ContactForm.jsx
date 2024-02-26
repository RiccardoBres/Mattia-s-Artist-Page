import React from 'react';
import './contactMolecules.css';
import CustomParagraph from '../../Atoms/CustomParagraph';
import CustomTitle from '../../Atoms/CustomTitle';
import CustomButton from '../../Atoms/CustomButton';

const ContactForm = () => {
    return (
        <div className='contact-form-container'>
            <CustomTitle text='Contact Me' className='medium-title text-center' />
            <CustomParagraph text='Currently available for freelance work.' className='medium-p mb-5' />
            <em>Email*</em>
            <input type='email' className='input' />
            <em>Message</em>
            <input type='email' className='input' />
            <div className="w-100 d-flex justify-content-center">
                <CustomButton text='Send' className='empty-button w-75 mt-5' />
            </div>
        </div>
    )
}

export default ContactForm
