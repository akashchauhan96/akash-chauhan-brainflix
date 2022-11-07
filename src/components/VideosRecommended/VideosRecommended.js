import './VideosRecommended.scss'

function VideosRecommended({videosData, showVideoArray}) {
  console.log(videosData);
  return (
    <aside className='recommended-videos'>
      <p className='recommended-videos__title'>Next Videos</p>
      {videosData.map((videoItem) => {
        <VideoItem 
          videosData={videosData} 
          showVideoArray={showVideoArray}
        />
      })}
    </aside>
  )
}

export default VideosRecommended