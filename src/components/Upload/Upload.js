import './Upload.scss'
import videoPreview from '../../assets/images/Upload-video-preview.jpg'
import publishIcon from '../../assets/icons/publish.svg'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { v4 as uuidv4} from 'uuid';

export default function Upload() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newVidName = e.target[0].value;
    const newVidDescription = e.target[1].value;
  }
  
  const handleCancel = (e) => {
    e.preventDefault();
    navigate('/');
  }

  return (
    <main>
      <form className='upload' onSubmit={handleSubmit}>
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
                name='video-title' 
                className='video-main__title-input'
                placeholder='Add a title to your video'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              >
              </input>
            </div>
            <div className='video-main__description-box'>
              <label className='video-main__description-label'>Add A Video Description</label>
              <textarea
                name="video-description"
                className="video-main__description-input"
                placeholder="Add a description to your video"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
          </div>  
        </div>
        <div className='button-section'>
          <button className="button-section__publish" type="submit">
            <img 
              className="button-section__publish-icon" 
              src={publishIcon}
              alt="Publish Icon"
            />
            <span className="button-section__publish-text">Publish</span>
          </button>
          <button className='button-section__cancel' onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </main>
  )
}