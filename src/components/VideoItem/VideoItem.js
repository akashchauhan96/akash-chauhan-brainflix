import './VideoItem.scss'
import { useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function VideoItem(props) {
  // console.log("Video Items ", props);
  const {id, title, channel, image} = props;

  const showVideoArray = props.showVideoArray;
  
  const mainURL = 'https://project-2-api.herokuapp.com/'
  const videosEndpoint = 'videos/'
  const apiKey = '?api_key=cd79fcde-0845-4d56-ab55-a675677dca40'
  
  // const handleClick = () => {
  //   set
  // //   useEffect(() => {
  // //     axios.get(`${mainURL}${videosEndpoint}${apiKey}`)
  // //     .then((resp) => {
  // //     const removeFirstVid = resp.data.filter((video) => {
  // //       return video.id !== resp.data[0].id;
  // //     })
  // //     setVideoInfo(resp.data[0]);
  // //     })
  // //     .catch((err) => {
  // //       console.log(err);
  // //     })
  // // }, [id])
  // }

  return (
    <>
      <Link to="/video/:id">
        <div className='recommended-videos__single-wrapper' >
          <img src={image} alt={title} className='recommended-videos__videos'/>
          <div className='recommended-videos__video-info'>
            <p className='recommended-videos__video-title'>{title}</p>
            <p className='recommended-videos__video-channel'>{channel}</p>
          </div>
        </div>
      </Link>
    </>
  )
}