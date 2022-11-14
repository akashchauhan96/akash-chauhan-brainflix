import './UploadMessage.scss'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';

export default function UploadMessage() {

  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/')
    }, 5000)
    return () => clearTimeout(timer);
  }, [])

  return (
    <h1 className='upload-complete'>Congratulations!! You have successfully uploaded your video. Please wait for a few seconds before we redirect you back to the Home Page. </h1>
  )
}