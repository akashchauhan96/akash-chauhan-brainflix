import './VideosRecommended.scss'
import VideoItem from '../VideoItem/VideoItem.js'

function VideosRecommended(props) {

  const videosData = props.videosData;
  console.log(videosData);
  // const showVideoArray = props.onVideosRecommended;
  // console.log(showVideoArray);
  return (
    <aside className='recommended-videos'>
      <p className='recommended-videos__title'>Next Videos</p>
      <div className='recommended-videos__list'>
        {videosData.map((videoItem) => {
          return (
            <VideoItem 
              key={videoItem.id}
              id={videoItem.id}
              title={videoItem.title}
              channel={videoItem.channel}
              image={videoItem.image}
              // showVideoArray={showVideoArray}
            />
          )
        })}
      </div>
    </aside>
  )
}

export default VideosRecommended