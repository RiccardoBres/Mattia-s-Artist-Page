import React from 'react';
import CustomTitle from '../Components/Atoms/CustomTitle';
import CustomParagraph from '../Components/Atoms/CustomParagraph';
import './Pages.css';
import VideoAbout from '../Layout/VIDEO/VideoGIFDrago.gif'
import CustomImage from '../Components/Atoms/CustomImage';


const ComingSoon = () => {
    return (
        <div className="coming-soon-container">
            <CustomTitle className="title big-title"text='Coming Soon'/>
            <CustomParagraph className="message" text='We are currently working on something amazing! Stay tuned for updates.' />
            <div className='coming-soon-video-container'>
                <CustomImage src={VideoAbout} />
            </div>
        </div>
    )
}

export default ComingSoon;
