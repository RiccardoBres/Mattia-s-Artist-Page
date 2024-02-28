import React from 'react';
import { useNavigate } from 'react-router-dom';
import CustomImage from '../../Atoms/CustomImage';
import { Col } from 'react-bootstrap';
import CustomTitle from '../../Atoms/CustomTitle';
import CustomParagraph from '../../Atoms/CustomParagraph';
import VisualData from './VisualData';

const VisualCard = () => {
    const navigate = useNavigate();

    const handleDetails = (id) => {
        navigate(`/visual-details/${id}`);
    };

    return (
        <>
            {VisualData.map((visual, index) => (
                <Col lg={4} md={4} sm={12} xs={12} key={index}>
                    <div className="card-video my-3">
                        <video autoPlay={false} src={visual.src} muted={true} key={index} loop={true}></video>
                        <div className="card-video-text">
                            <CustomTitle text={visual.name} className='big-title cursor-pointer' />
                            <CustomParagraph text={visual.dateOfPublication}  onClick={() => handleDetails(visual.id)} className='small-p' />
                            <CustomParagraph text='DETAILS' onClick={() => handleDetails(visual.id)} className='small-p cursor-pointer mt-3' />
                        </div>
                    </div>
                </Col>
            ))}
        </>
    );
};

export default VisualCard;
