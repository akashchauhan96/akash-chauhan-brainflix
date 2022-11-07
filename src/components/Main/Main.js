import './Main.scss'
import VideoDescription from '../VideoDescription/VideoDescription'
import Comments from '../Comments/Comments'

function Main({videoDetails}) {
  return (
    <div className='video-details__wrapper'>
      <VideoDescription
        videoDetails={videoDetails}
      />
      <Comments 
        videoDetails={videoDetails}
      />
    </div>
  )
}

export default Main