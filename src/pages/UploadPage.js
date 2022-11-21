import { useEffect } from 'react'
import Upload from '../components/Upload/Upload'

export default function UploadPage() {

  useEffect(() => {
    document.title = 'Brainflix Upload'
  }, [])
  
  return (
    <>
      <Upload />
    </>
  )
}