import './VideoItem.scss'

function VideoItem(props) {
  // console.log("Video Items ", props);
  const {id, title, channel, image} = props;

  const showVideoArray = props.showVideoArray;

  const handleClick = () => {
    showVideoArray(id);
  }

  return (
    <div className='recommended-videos__single-wrapper' onClick={handleClick} key={id}>
      <img src={image} alt={title} className='recommended-videos__videos'/>
      <div className='recommended-videos__video-info'>
        <p className='recommended-videos__video-title'>{title}</p>
        <p className='recommended-videos__video-channel'>{channel}</p>
      </div>
    </div>
  )
}

export default VideoItem