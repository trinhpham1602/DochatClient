import React from 'react';
import './Sidebar.css';
import { useNavigate } from 'react-router-dom';
export const Sidebar: React.FC = () => {
  let navigate = useNavigate();
  const routeChange = (path: string) => {
    navigate(path);
  };
  return (
    <div className='sidebar-container'>
      <button type='button' onClick={() => routeChange('/')}>
        home
      </button>
      <button type='button' onClick={() => routeChange('dashboard')}>
        dashboard
      </button>
      <button type='button' onClick={() => routeChange('mypage')}>
        post
      </button>
      <button type='button' onClick={() => routeChange('post')}>
        mypage
      </button>
    </div>
  );
};
