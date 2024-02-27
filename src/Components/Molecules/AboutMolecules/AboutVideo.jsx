import React from 'react';
import './AboutMolecules.css';
import VideoAbout from '../../../Layout/VIDEO/VideoGIFDrago.gif';
import CustomImage from '../../Atoms/CustomImage';


const AboutVideo = () => {
  return (
    <div className='about-video-container'>
      <img src={VideoAbout}/>
    </div>
  )
}

export default AboutVideo
