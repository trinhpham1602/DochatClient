import React, { useRef, useState } from 'react';
import './App.css';
import { LoginPage } from './components/pages/LoginPage';
import axios, { AxiosRequestConfig } from 'axios';
import UploadLargeFile from './components/pages/UploadLargeFile';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000/api/v1',
});

function App() {
  return (
    <div className='container'>
      <UploadLargeFile />
    </div>
  );
}

export default App;
