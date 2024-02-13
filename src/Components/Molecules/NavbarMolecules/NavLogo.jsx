import React from 'react';
import Logo from '../../../Layout/ASSETS/Logo.png';
import CustomImage from '../../Atoms/CustomImage';
import './NavMolecules.css';

const NavLogo = () => {
  return (
    <div>
      <CustomImage src={Logo} alt="Logo" className="nav-logo"/>
    </div>
  )
}

export default NavLogo
