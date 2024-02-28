import React from 'react';
import CustomNavbar from '../../Components/Organism/Navbar/CustomNavbar';
import { useParams } from 'react-router-dom';
import VisualDetails from '../../Components/Molecules/VisualDevelopment/VisualDetails';


const VisualDetailsPage = () => {
    const { id } = useParams();
    return (
        <>
            <CustomNavbar />
            <VisualDetails id={id}/>
        </>
    )
}

export default VisualDetailsPage
