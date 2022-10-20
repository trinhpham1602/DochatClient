import React, { useMemo } from 'react';
import { SocialLoginOption } from '../../common/socialLoginOption/SocialLoginOption';
import { loginOptions } from '../../common/constants';

export const SocialLoginField: React.FC = () => {
  const socialLoginOption = useMemo(
    () =>
      loginOptions.map((option: any, index) => {
        return (
          <SocialLoginOption
            key={index}
            iconUrl={option.iconURL}
            type={option.type}
          />
        );
      }),
    []
  );
  return (
    <>
      <h1 className='m-0'>Sign in to your account</h1>
      <div className='d-flex justify-content-center'>
        <p className='mb-1'>sign in using social networking</p>
      </div>
      <div className='d-flex justify-content-center mb-2'>
        {socialLoginOption}
      </div>
    </>
  );
};
