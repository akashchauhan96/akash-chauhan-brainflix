import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header.js';
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
          <Route path='/videos/:id' element={<HomePage />} />
          <Route path='/upload' element={<UploadPage />} />
          <Route path='/upload/complete' element={<UploadComplete />} />
          <Route path="*" element={<NotFound />} />
        </Routes> 
      </BrowserRouter> 
    </>
  );
}