import './Upload.scss'
import videoPreview from '../../assets/images/Upload-video-preview.jpg'
import { Link } from 'react-router-dom'
import publishIcon from '../../assets/icons/publish.svg'

export default function Upload() {
  return (
    <main>
      <section className='upload'>
        <h1 className='upload__title'>Upload Video</h1>
        <div className='video-main'>
          <figure className='video-main__video-figure'>
            <figcaption className='video-main__thumbnail-text'>Video Thumbnail</figcaption>
            <img src={videoPreview} alt='Video Thumbnail' className='video-main__video-thumbnail'/>
          </figure>
          <div className='video-main__video-info'>
            <div className='video-main__title-box'>
              <label className='video-main__title-label'>Title Your Video</label>
              <input
                type='text' 
                name='video-title' className='video-main__title-input'
                placeholder='Add a title to your video'>
              </input>
            </div>
            <div className='video-main__description-box'>
              <label className='video-main__description-label'>Add A Video Description</label>
              <textarea
                name="video-description"
                className="video-main__description-input"
                placeholder="Add a description to your video"
              ></textarea>
            </div>
          </div>  
        </div>
        <div className='button-section'>
          <Link to='/upload/complete' style={{textDecoration: 'none'}}>
            <button className="button-section__publish">
              <img 
                className="button-section__publish-icon" 
                src={publishIcon}
                alt="Publish Icon"
              />
              <span className="button-section__publish-text">Publish</span>
            </button>
          </Link>
          <Link to='/' style={{textDecoration: 'none'}}>
            <button className='button-section__cancel'>Cancel</button>
          </Link>
        </div>
      </section>
    </main>
  )
}