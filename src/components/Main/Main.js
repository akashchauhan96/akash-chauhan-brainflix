import './Main.scss'
import HeroVideo from '../HeroVideo/HeroVideo.js'
import VideoDescription from '../VideoDescription/VideoDescription'

function Main({videoDetails}) {
  return (
    <main>
      <HeroVideo
        videoDetails={videoDetails}
      />
      <VideoDescription
        videoDetails={videoDetails}
      />
      {/* <Comment 
        videosData={videoDetails}
      /> */}
    </main>
  )
}

export default Main