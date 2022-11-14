import './UploadMessage.scss'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';

export default function UploadMessage() {

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/')
    }, 5000)
  }, [])

  return (
    <h1>Congratulations!! You have succssfully uploaded your video. Please wait for a few seconds before we redirect you back to the Home Page. </h1>
  )
}