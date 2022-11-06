import './Main.scss'
import HeroVideo from '../HeroVideo/HeroVideo.js'

function Main({videoDetails}) {
  return (
    <main>
      <HeroVideo
        videoDetails={videoDetails}
      />
      {/* <VideoDescription
        videoDetails={videoDetails}
      />
      <Comment 
        videosData={videoDetails}
      /> */}
    </main>
  )
}

export default Main