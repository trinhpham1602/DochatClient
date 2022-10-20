import React from 'react';
import '../css/styles.css';
import logo from '../../assets/images/logo.png';

export const LogoField: React.FC = () => {
  return (
    <div className='position-absolute'>
      <div className='d-flex flex-row align-self-center'>
        <img className='logo-size' src={logo} alt='' />
        <div className='m-auto'>
          <p className='m-0 name-app-color'>DoChat</p>
        </div>
      </div>
    </div>
  );
};
