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
      <VideoDescription
        videoDetails={videoDetails}
      />
      <Comments 
        videoDetails={videoDetails}
      />
    </main>
  )
}

export default Main