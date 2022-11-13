import './UploadMain.scss'
import videoPreview from '../../assets/images/Upload-video-preview.jpg'
import { Link } from 'react-router-dom'
import publishIcon from '../../assets/icons/publish.svg'

export default function UploadMain() {
  return (
    <main>
      <section className='upload'>
        <h1 className='upload__title'>Upload Video</h1>
        <div className='upload__main-section'>
          <figure className='video'>
            <figcaption className='video__thumbnail-text'>Video Thumbnail</figcaption>
            <img src={videoPreview} alt='Video Thumbnail' />
          </figure>
          <div className='video-info'>
            <label className='video-info__title'></label>
            <input type='text' name='video-title' className='video-info__title-input'></input>
            <label className='video-info__description'></label>
            <textarea
              name="video-description"
              className="c__comment"
              placeholder="Add a new comment"
            ></textarea>
          </div>  
        </div>
        <div className='upload__button-section'>
          <Link to='/upload/submit'>
            <button className="upload__publish">
              <img 
                className="upload__publish-icon" 
                src={publishIcon}
                alt="Publish Icon"
              />
              <span className="upload__publish-text">Upload</span>
            </button>
          </Link>
          <Link to='/'>
            <button className='upload__cancel'>Cancel</button>
          </Link>
        </div>
      </section>
    </main>
  )
}