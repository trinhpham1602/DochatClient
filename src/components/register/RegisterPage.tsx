import React from 'react';
import './RegisterPage.css';
export const RegisterPage: React.FC = () => {
  return (
    <div className='wrapper d-flex justify-content-center'>
      <div className='m-auto'>
        <div className='text-center'>
          <h1 className='m-0'>New here?</h1>
        </div>
        <div className='my-4'>
          Sign up and discover a great amount of new opportunities!
        </div>
        <div className='d-flex justify-content-center mt-3'>
          <button className='btn-signup m-auto' type='button'>
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};
