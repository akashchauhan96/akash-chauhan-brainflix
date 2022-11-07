import './VideoItem.scss'

function VideoItem(props) {
  const {id, title, channel, image, showVideoArray} = props;

  const handleClick = () => {
    showVideoArray(id);
  }

  return (
    <div className='recommended-videos__single-wrapper' onClick={handleClick}>
      <img src={image} alt={title} className='recommended-videos__videos'/>
      <div className='recommended-videos__video-info'>
        <p className='recommended-videos__video-title'>{title}</p>
        <p className='recommended-videos__video-channel'>{channel}</p>
      </div>
    </div>
  )
}

export default VideoItem