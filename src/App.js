import './App.scss';
import Header from './components/Header/Header.js';
import Main from './components/Main/Main.js'
import videosData from './assets/data/videos.json'
import videoDetails from './assets/data/video-details.json'
import { useState } from 'react'

function App() {
  const [videoInfo, setVideoInfo] = useState(videoDetails[0])
  const [videoArray, setVideoArray] = useState(videosData.filter((video) => {
    return video !== videoDetails[0];
  }))

  console.log(videoDetails);

  function showVideoDetails(videoId) {

    const newVideoDetails = videoDetails.find((video) => {
      return video.id === videoId
  })

  setVideoInfo(newVideoDetails);

  }

  function showVideoArray(videoId) {
    const findCurrentVideo = videosData.find((video) => {
      return video.id !== videoInfo.id
    })
    const newVideoArray = videoArray.filter((video) => {
      return video.id !== videoId
    })

    setVideoArray([{findCurrentVideo}, ...newVideoArray]);
  }
  
  return (
    <>
      <Header />
      <Main 
        videoDetails={videoInfo}
        onCurrentVideo={showVideoDetails}
      />
      {/* <VideosReccomend 
        videosData={videoArray}  
        onVideosRecommend={showVideoArray}
      /> */}
    </>
  );
}

export default App;
