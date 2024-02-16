import React from 'react';
import './AboutMolecules.css';
import CustomTitle from '../../Atoms/CustomTitle';
import CustomParagraph from '../../Atoms/CustomParagraph';
import CustomImage from '../../Atoms/CustomImage';
import Bio from '../../../Layout/ASSETS/Bio.jpg'

const AboutDescription = () => {
    const bioText = "Mattia is an Italian artist and filmmaker based in France. \
He studied at Accademia di Belle Arti di Roma for his bachelor's degree. \
In 2017, he moved to Paris to study character animation and animated filmmaking in Gobelins, l'école de l'image, and graduated in 2019 with his graduation film Blind Eye. \
He has a passion for storytelling and drawing. He specializes in directing, art direction, concept art, and illustration. He also works as a storyboarder, character designer, and comic artist. \
He is currently studying and developing his projects at La Poudrière in Valence, France.";

    return (
        <div className="container-about-description">
            <img src={Bio} alt="Bio" className='about-image' />
            <CustomParagraph text={bioText} className='medium-p' />
        </div>
    )
}

export default AboutDescription
