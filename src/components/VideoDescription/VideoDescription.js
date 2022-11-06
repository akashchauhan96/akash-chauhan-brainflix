import './VideoDescription.scss';
import viewsIcon from '../../assets/icons/views.svg'
import likesIcon from '../../assets/icons/likes.svg'

function VideoDescription({videoDetails}) {
  
  function DateGenerator(date) {
    console.log(date);
    const newDate = new Date(date);
    let month = newDate.getMonth() + 1;
    if (month<10) {
      month = `0${month}`;
    }
    let day = newDate.getDate();
    if (day<10) {
      day = `0${day}`;
    }
    const year = newDate.getFullYear();
    return `${month}/${day}/${year}`;
  }
  
  return (
    <section className='video-description'>
      <h1 className='video-description__title'>{videoDetails.title}</h1>
      <div className='video-description__info'>
        <div className='video-description__channel-box'>
          <p className='video-description__channel'>By {videoDetails.channel}</p>
          <p className='video-description__date'>{DateGenerator(videoDetails.timestamp)}</p>
        </div>
        <div className='video-description__stats'>
          <div className='video-description__views-box'>
            <img className='video-description__view-icon' src={viewsIcon} alt="Views Icon" />
            <p className='video-description__total-views'>{videoDetails.views}</p>
          </div>
          <div className='video-description__likes-box'>
            <img className='video-description__likes-icon' src={likesIcon} alt="Likes Icon" />
            <p className='video-description__total-likes'>{videoDetails.likes}</p>
          </div>
        </div>
      </div>
      <p className='video-description__description'>{videoDetails.description}</p>
    </section>
  )
}

export default VideoDescription