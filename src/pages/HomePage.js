import Main from '../components/Main/Main'
import HeroVideo from '../components/HeroVideo/HeroVideo';
import VideosRecommended from '../components/VideosRecommended/VideosRecommended'
import { getVideosArray, getVideoDetailsById } from '../utils/api-utils';
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import { getVideoDetailsById, getVideosArray } from '../utils/api-utils';

export default function Homepage() {

  const [videoInfo, setVideoInfo] = useState(null);
  const [videoArray, setVideoArray] = useState(null);

  const { id } = useParams();
  const selectedVideoId = id;
  
  useEffect(() => {
    axios.get(getVideosArray())
    .then((resp) => {
    const initialVideosArray = resp.data.filter((video) => {
      return video.id !== resp.data[0].id
    })
    setVideoArray(initialVideosArray);
    return resp.data[0].id
    })
    .then((firstVidId) => {
      axios.get(getVideoDetailsById(firstVidId))
      .then((resp) => {
        setVideoInfo(resp.data);
      })
    })
    .catch((err) => {
      console.log(err);
    })
  }, [])

  useEffect(() => {
    axios.get(getVideosArray())
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
      axios.get(getVideoDetailsById(selectedVideoId))
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