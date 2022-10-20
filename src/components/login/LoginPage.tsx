import React, { useCallback, useMemo, useState } from 'react';
import './LoginPage.css';
import { SocialLoginField } from './SocialLoginField';

export const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onSubmit = useCallback(() => {
    if (password && email) {
      console.log('submited');
    }
  }, [email, password]);

  return (
    <form className='m-auto'>
      <SocialLoginField />
      <div className='border rounded-4 p-4 form-container'>
        <div className='mb-3'>
          <label htmlFor='exampleInputEmail1' className='form-label'>
            Email address
          </label>
          <input
            type='email'
            className='form-control'
            id='exampleInputEmail1'
            aria-describedby='emailHelp'
            onChange={(value) => setEmail(value.target.value)}
          />
          <div id='emailHelp' className='form-text'>
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className='mb-3'>
          <label htmlFor='exampleInputPassword1' className='form-label'>
            Password
          </label>
          <input
            type='password'
            className='form-control'
            id='exampleInputPassword1'
            onChange={(value) => setPassword(value.target.value)}
          />
        </div>
        <div className='mb-3 form-check'>
          <input
            type='checkbox'
            className='form-check-input'
            id='exampleCheck1'
          />
          <label className='form-check-label' htmlFor='exampleCheck1'>
            Check me out
          </label>
        </div>
        <button type='submit' className='btn btn-primary' onClick={onSubmit}>
          Submit
        </button>
      </div>
    </form>
  );
};
