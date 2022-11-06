import './Main.scss'
import HeroVideo from '../HeroVideo/HeroVideo.js'
import VideoDescription from '../VideoDescription/VideoDescription'
import Comments from '../Comments/Comments'

function Main({videoDetails}) {
  return (
    <main>
      <HeroVideo
        videoDetails={videoDetails}
      />
      <div className='main-aside__wrapper'>
        <div className='video-details__wrapper'>
          <VideoDescription
            videoDetails={videoDetails}
          />
          <Comments 
            videoDetails={videoDetails}
          />
        </div>
      </div>
    </main>
  )
}

export default Main