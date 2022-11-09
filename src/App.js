import './App.scss';
import Header from './components/Header/Header.js';
import videosData from './assets/data/videos.json'
import videoDetails from './assets/data/video-details.json'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'

function App() {
  const [videoInfo, setVideoInfo] = useState(videoDetails[0])
  const [videoArray, setVideoArray] = useState(videosData.filter((video) => {
    return video.id !== videoDetails[0].id;
  }))

  function showVideoArray(videoId) {
    const findCurrentVideo = videosData.find((video) => {
      return video.id === videoInfo.id
    })
    const newVideoArray = videoArray.filter((video) => {
      return video.id !== videoId
    })
    const newVideoDetails = videoDetails.find((video) => {
      return video.id === videoId
    })

    setVideoArray([findCurrentVideo, ...newVideoArray]);
    setVideoInfo(newVideoDetails);
  }
  
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<MainVideoPage videoInfo={videoInfo}/>} />
          <Route path='/video/:id' element={<MainVideoPage />} />
          <Route path='/upload' element={<UploadPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes> 
      </BrowserRouter> 
    </>
  );
}

export default App;
