import React from 'react';
import WorksData from './WorksData';
import CustomParagraph from '../../Atoms/CustomParagraph';
import CustomTitle from '../../Atoms/CustomTitle';
import CustomImage from '../../Atoms/CustomImage';
import './WorkMolecules.css';

const WorksInfo = () => {
    return (
        <>
            {
                WorksData.map((work, index) => {
                    return (
                        <div className="work-video-container" key={index}>
                            <video autoPlay={true} src={work.src} muted={true} loop={true}></video>
                            <div className="card-work-text">
                                <CustomTitle text={work.name} className='very-big-title' />
                                <CustomParagraph text={work.description} className='medium-p' />
                                <CustomParagraph text={work.dateOfPublication} className='small-p' />
                            </div>
                            <div className="card-related-images">
                                {work.images.map((image, idx) => (
                                    <CustomImage
                                        src={image}
                                        alt={`Image ${idx}`}
                                        key={idx}
                                        className='related-image'
                                    />
                                ))}
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default WorksInfo;
