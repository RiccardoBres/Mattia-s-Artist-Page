import React from 'react';
import CustomNavbar from '../../Components/Organism/Navbar/CustomNavbar';
import AnimationDetails from '../../Components/Molecules/AnimationMolecules/AnimationDetails';
import { useParams } from 'react-router-dom';


const AnimatioNDetailsPage = () => {
    const { id } = useParams();
    return (
        <>
            <CustomNavbar />
            <AnimationDetails id={id} />
        </>
    )
}

export default AnimatioNDetailsPage
