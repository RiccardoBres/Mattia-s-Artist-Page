import React from 'react';
import CustomTitle from '../../Atoms/CustomTitle';
import CustomParagraph from '../../Atoms/CustomParagraph';
import FilmsData from './FilmsData';

const VideoCard = () => {
    return (
        <>
            {
                FilmsData.map((film, index) => {
                    return (
                        <div className="card-video">
                            <video autoPlay={true} src={film.src} muted={true} key={index} loop={true}></video>
                            <div className="card-video-text">
                                <CustomTitle text={film.name} className='very-big-title' />
                                <CustomParagraph text={film.dateOfPublication} className='small-p' />
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default VideoCard;

