import './App.scss';
import Header from './components/Header/Header.js';
// import videosData from './assets/data/videos.json'
// import videoDetails from './assets/data/video-details.json'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react'
import HomePage from './pages/HomePage'
// import VideoDetailsPage from './pages/VideoDetailsPage';
// import UploadPage from './pages/UploadPage'
// import NotFound from './pages/NotFound'
import axios from 'axios'

export default function App() {
  const [videoInfo, setVideoInfo] = useState(null);
  const [videoArray, setVideoArray] = useState([]);

  //Deconstruct axious url link
  const mainURL = 'https://project-2-api.herokuapp.com/'
  const videosEndpoint = 'videos/'
  const apiKey = '?api_key=cd79fcde-0845-4d56-ab55-a675677dca40'

  useEffect(() => {
    axios.get(`${mainURL}${videosEndpoint}${apiKey}`)
    .then((resp) => {
    const removeFirstVid = resp.data.filter((video) => {
      return video.id !== resp.data[0].id
    })
    setVideoInfo(resp.data[0]);
    })
    .catch((err) => {
      console.log(err);
    })
  }, [])
  // function showVideoArray(videoId) {
  //   const findCurrentVideo = videosData.find((video) => {
  //     return video.id === videoInfo.id
  //   })
  //   const newVideoArray = videoArray.filter((video) => {
  //     return video.id !== videoId
  //   })
  //   const newVideoDetails = videoDetails.find((video) => {
  //     return video.id === videoId
  //   })

  //   setVideoArray([findCurrentVideo, ...newVideoArray]);
  //   setVideoInfo(newVideoDetails);
  // }
  
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          {/* <Route path='/video/:id' element={<VideoDetailsPage />} />
          <Route path='/upload' element={<UploadPage />} />
          <Route path="*" element={<NotFound />} /> */}
        </Routes> 
      </BrowserRouter> 
    </>
  );
}