import './VideosRecommended.scss'
import VideoItem from '../VideoItem/VideoItem.js'

export default function VideosRecommended({ videosData }) {
  // console.log(videosData);
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
            />
          )
        })}
      </div>
    </aside>
  )
}