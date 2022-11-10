import './App.scss';
import Header from './components/Header/Header.js';
// import videosData from './assets/data/videos.json'
// import videoDetails from './assets/data/video-details.json'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage'
import UploadPage from './pages/UploadPage'
import NotFound from './pages/NotFound'

export default function App() {  
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/video/:id' element={<HomePage />} />
          <Route path='/upload' element={<UploadPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes> 
      </BrowserRouter> 
    </>
  );
}