import Main from '../components/Main/Main'
import HeroVideo from '../components/HeroVideo/HeroVideo';
import VideosRecommended from '../components/VideosRecommended/VideosRecommended'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';

export default function Homepage() {

  const [videoInfo, setVideoInfo] = useState(null);
  const [videoArray, setVideoArray] = useState(null);

  //Deconstruct axious url link
  const mainURL = 'https://project-2-api.herokuapp.com/'
  const videosEndpoint = 'videos/'
  const apiKey = '?api_key=cd79fcde-0845-4d56-ab55-a675677dca40'

  const { id } = useParams();
  const selectedVideoId = id;
  // console.log(selectedVideoId);
  
  useEffect(() => {
    axios.get(`${mainURL}${videosEndpoint}${apiKey}`)
    .then((resp) => {
    const initialVideosArray = resp.data.filter((video) => {
      return video.id !== resp.data[0].id
    })
    setVideoArray(initialVideosArray);
    return resp.data[0].id
    })
    .then((firstVidId) => {
      axios.get(`${mainURL}${videosEndpoint}${firstVidId}${apiKey}`)
      .then((resp) => {
        setVideoInfo(resp.data);
      })
    })
    .catch((err) => {
      console.log(err);
    })
  }, [])

  useEffect(() => {
    axios.get(`${mainURL}${videosEndpoint}${apiKey}`)
    .then((resp) => {
      const findCurrentVideo = resp.data.find((video) => {
        return video.id === videoInfo.id
      })
      console.log("Video currently displayed", findCurrentVideo);
      const videosArrayWithoutSelectedVid = videoArray.filter((video) => {
        return video.id !== selectedVideoId;
      })
      setVideoArray([findCurrentVideo, ...videosArrayWithoutSelectedVid]);
    })
    .then(() => {
      axios.get(`${mainURL}${videosEndpoint}${selectedVideoId}${apiKey}`)
      .then((resp) => {
        setVideoInfo(resp.data);
      })
    })
    .catch((err) => {
      console.log(err);
    })
  }, [id])

  if(videoInfo) {
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
            />
          </div>
        </main>
      </>
    )
  }
}