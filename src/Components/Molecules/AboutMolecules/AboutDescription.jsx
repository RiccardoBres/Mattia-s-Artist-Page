import React from 'react';
import './AboutMolecules.css';
import CustomTitle from '../../Atoms/CustomTitle';
import CustomParagraph from '../../Atoms/CustomParagraph';
import CustomImage from '../../Atoms/CustomImage';
import Bio from '../../../Layout/ASSETS/Bio.jpg'

const AboutDescription = () => {
    const bioText = "Mattia Ronconi, Italian artist based in Porto, pursued a double degree in product design from UNIFE (Italy) and PUCPR (Brazil), deepens his studies in the master’s degree in illustration and animation at IPCA (Portugal). Currently, he works as a visual developer artist and 2D animator at the production company Amarela Mecânica. Paralellaly, he immerses in various personal projects spanning animation, illustration, comics, tattooing, and street art. In December 2023, he curated the art exhibition MOSTRALGIA, showcasing pieces that explore the convergence of analogue art with digital technologies, encompassing digital animation and augmented reality. In early 2024, alongside Ana Lopes, he co-founded CAFU Collective, dedicated to the development of multidisciplinary projects.";

    return (
        <div className="container-about-description">
            <img src={Bio} alt="Bio" className='about-image' />
            <CustomParagraph text={bioText} className='medium-p' />
        </div>
    )
}

export default AboutDescription
