import Main from './components/Main/Main.js'
import HeroVideo from './components/HeroVideo/HeroVideo.js';
import VideosRecommended from './components/VideosRecommended/VideosRecommended.js'

function VideoDetailsPage() {
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
            onVideosRecommended={showVideoArray}
          />
        </div>
      </main>
    </>
  )
}

export default VideoDetailsPage