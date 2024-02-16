import React from 'react';
import './AboutMolecules.css';
import VideoAbout from '../../../Layout/VIDEO/AboutVideo.gif';
import CustomImage from '../../Atoms/CustomImage';


const AboutVideo = () => {
  return (
    <div className='about-video-container'>
      <CustomImage src={VideoAbout} />
    </div>
  )
}

export default AboutVideo
