import './App.scss';
import Header from './components/Header/Header.js';
import Main from './components/Main/Main.js'
import HeroVideo from './components/HeroVideo/HeroVideo.js';
import VideosRecommended from './components/VideosRecommended/VideosRecommended.js'
import videosData from './assets/data/videos.json'
import videoDetails from './assets/data/video-details.json'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'

function App() {
  const [videoInfo, setVideoInfo] = useState(videoDetails[0])
  const [videoArray, setVideoArray] = useState(videosData.filter((video) => {
    return video.id !== videoDetails[0].id;
  }))

  // console.log(videoArray);

  // function showVideoDetails(videoId) {

  //   const newVideoDetails = videoDetails.find((video) => {
  //     return video.id === videoId
  //   })

  //   setVideoInfo(newVideoDetails);

  // }

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
      <Header />
      <HeroVideo
        videoDetails={videoInfo}
      />
      <main>
        <div className='main-aside__wrapper'>
          <Main 
            videoDetails={videoInfo}
          />
          <VideosRecommended 
            videosData={videoArray}  
            onVideosRecommended={showVideoArray}
          />
        </div>
      </main>  
    </>
  );
}

export default App;
