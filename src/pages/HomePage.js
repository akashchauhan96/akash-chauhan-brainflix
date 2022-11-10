import Main from '../components/Main/Main'
import HeroVideo from '../components/HeroVideo/HeroVideo.js';
import VideosRecommended from '../components/VideosRecommended/VideosRecommended.js'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';

export default function Homepage() {

  const [videoInfo, setVideoInfo] = useState(null);
  const [videoArray, setVideoArray] = useState([]);

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

  //Deconstruct axious url link
  const mainURL = 'https://project-2-api.herokuapp.com/'
  const videosEndpoint = 'videos/'
  const apiKey = '?api_key=cd79fcde-0845-4d56-ab55-a675677dca40'

  // const { id } = useParams();
  // const videoId = id;
  
  useEffect(() => {
    axios.get(`${mainURL}${videosEndpoint}${apiKey}`)
    .then((resp) => {
    const videosList = resp.data.filter((video) => {
      return video.id !== resp.data[0].id
    })
    setVideoArray(videosList);
    return resp.data[0].id
    })
    .then((firstVidId) => {
      console.log(firstVidId);
      axios.get(`${mainURL}${videosEndpoint}${firstVidId}/${apiKey}`)
      .then((resp) => {
        setVideoInfo(resp.data);
      })
    })
    .catch((err) => {
      console.log(err);
    })
  }, [])

  // useEffect(() => {
  //   axios.get(`${mainURL}${videosEndpoint}${videoId}${apiKey}`)
  //   .then((resp) => {
  //   const removeVidFromArray = resp.data.filter((video) => {
  //     return video.id !== resp.data[0].id
  //   })
  //   setVideoInfo(resp.data[0]);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   })
  // }, [id])

  return (
    <>
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
            // onVideosRecommended={showVideoArray}
          />
        </div>
      </main>
    </>
  )
}