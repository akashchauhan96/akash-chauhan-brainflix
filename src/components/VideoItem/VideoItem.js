import './VideoItem.scss'
import { Link } from 'react-router-dom'

export default function VideoItem(props) {
  // console.log("Video Items ", props);
  const {id, title, channel, image} = props;

  return (
    <>
      <Link to={`/videos/${id}`} className="recommended-videos__video-link">
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