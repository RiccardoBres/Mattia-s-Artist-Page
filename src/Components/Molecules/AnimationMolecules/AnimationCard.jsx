import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import CustomTitle from '../../Atoms/CustomTitle';
import CustomParagraph from '../../Atoms/CustomParagraph';
import AnimationData from './Animation';

const AnimationCard = () => {
    const navigate = useNavigate();

    const handleDetails = (id) => {
        navigate(`/animation-details/${id}`);
    };

    return (
        <>
            {AnimationData.map((animation, index) => (
                <Col lg={4} md={4} sm={12} xs={12} key={index}>
                    <div className="card-video">
                        <video autoPlay={true} src={animation.src} muted={true} key={index} loop={true}></video>
                        <div className="card-video-text">
                            <CustomTitle text={animation.name} className='very-big-title cursor-pointer' />
                            <CustomParagraph text={animation.dateOfPublication}  onClick={() => handleDetails(animation.id)} className='small-p' />
                            <CustomParagraph text='DETAILS' onClick={() => handleDetails(animation.id)} className='small-p cursor-pointer mt-3' />
                        </div>
                    </div>
                </Col>
            ))}
        </>
    );
};

export default AnimationCard;
