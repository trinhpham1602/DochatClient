import './App.css';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './components/home/HomePage';
import { DashBoard } from './components/dashboard/Dashboard';
import { PostPage } from './components/post/PostPage';
import { MyPage } from './components/mypage/MyPage';
import { Sidebar } from './common/sidebar/Sidebar';
import { AuthenticationPage } from './components/authentication/AuthenticationPage';

function App() {
  const isAuthenticated = false;
  return (
    <div className='App'>
      {isAuthenticated ? (
        <>
          <Sidebar />
          <div className='app-container'>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='dashboard' element={<DashBoard />} />
              <Route path='mypage' element={<MyPage />} />
              <Route path='post' element={<PostPage />} />
            </Routes>
          </div>
        </>
      ) : (
        <Routes>
          <Route path='/login' element={<AuthenticationPage />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
