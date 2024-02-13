import React from 'react';
import DrawingData from './DrawingData';
import { useParams } from 'react-router-dom';
import './DrawingsMolecules.css'; // Assicurati di avere questo file CSS con le tue regole personalizzate
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/fall-animation.css'; // Importa l'animazione fallAnimation

const DrawingCarousel = () => {
    const { category } = useParams();
    const filteredData = DrawingData.find((item) => item.category === category);

    const imageElements = filteredData.images.map((image, idx) => (
        <div key={idx} data-src={image.src} />
    ));

    return (
        <AwesomeSlider animation="fallAnimation" autoPlay={true} bullets={false} fillParent={true}>
            {imageElements}
        </AwesomeSlider>
    );
};

export default DrawingCarousel;
