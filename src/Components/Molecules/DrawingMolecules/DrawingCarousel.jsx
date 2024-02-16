import React, { useState, useEffect } from 'react';
import DrawingData from './DrawingData';
import { useParams } from 'react-router-dom';
import './DrawingsMolecules.css';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/fall-animation.css'; 
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import 'react-awesome-slider/dist/custom-animations/fall-animation.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';

const DrawingCarousel = () => {
    const { category } = useParams();
    const [animation, setAnimation] = useState('fallAnimation');

    useEffect(() => {
        const categoryAnimations = {
            'Illustration': 'fallAnimation',
            'Painting': 'cubeAnimation',
            'Street Art': 'fadeAnimation' 
        };

        if (categoryAnimations[category]) {
            setAnimation(categoryAnimations[category]);
        }
    }, [category]);

    const filteredData = DrawingData.find((item) => item.category === category);

    const imageElements = filteredData?.images.map((image, idx) => (
        <div key={idx} data-src={image.src} />
    ));

    return (
        <AwesomeSlider animation={animation} autoPlay={true} bullets={false} fillParent={true}>
            {imageElements}
        </AwesomeSlider>
    );
};

export default DrawingCarousel;
