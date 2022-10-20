import React from 'react';
import { LogoField } from '../../common/logo/LogoField';
import { LoginPage } from '../login/LoginPage';
import { RegisterPage } from '../register/RegisterPage';
import './AuthenticationPage.css';

export const AuthenticationPage: React.FC = () => {
  return (
    <div className='d-flex flex-row auth-container'>
      <LogoField />
      <div className='col-lg-9 col-8 col-sm-8 d-flex justify-content-center login-container'>
        <LoginPage />
      </div>
      <div className='col-lg-3 col-4 col-sm-4'>
        <RegisterPage />
      </div>
    </div>
  );
};
