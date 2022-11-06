import './Main.scss'
import HeroVideo from '../HeroVideo/HeroVideo.js'
import VideoDescription from '../VideoDescription/VideoDescription.js'
import Comment from '../Comment/Comment.js'

function Main() {
  return (
    <main>
      <HeroVideo videoSelect/>
      <VideoDescription/>
      <Comment videosData={videosData}/>
    </main>
  )
}

export default Main