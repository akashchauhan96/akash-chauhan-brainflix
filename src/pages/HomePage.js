import Main from '../components/Main/Main'
import HeroVideo from '../components/HeroVideo/HeroVideo';
import VideosRecommended from '../components/VideosRecommended/VideosRecommended'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import { getVideoDetailsById, getVideosArray } from '../utils/api-utils';

export default function Homepage() {

  const [videoInfo, setVideoInfo] = useState(null)
  const [videoArray, setVideoArray] = useState([]);

  const { id } = useParams();
  const selectedVideoId = id;
  
  useEffect(() => {
    document.title = 'Brainflix Home'
    axios.get(getVideosArray())
    .then(resp => {
      const currentVid = resp.data.find(video => {
        return video.id === selectedVideoId
      })
      if (currentVid) {
        const newVideosArray = resp.data.filter(video => {
          return video.id !== selectedVideoId;
        })
        setVideoArray(newVideosArray);
        axios.get(getVideoDetailsById(selectedVideoId))
          .then(response => {
            setVideoInfo(response.data);
          })
      }
      else {
        const initialVideosArray = resp.data.filter(video => {
          return video.id !== resp.data[0].id
        })
        setVideoArray(initialVideosArray);
        axios.get(getVideoDetailsById(resp.data[0].id))
        .then(response => {
          setVideoInfo(response.data);
        })
      }
    })
    .catch(err => {
      console.log(err);
    })
  }, [selectedVideoId])

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