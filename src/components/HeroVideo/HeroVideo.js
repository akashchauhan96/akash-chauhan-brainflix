import './HeroVideo.scss'

function HeroVideo({videoDetails}) {
  return (
    <section className='hero' >
      <div className='hero__container' >
        <video className='hero__video' controls poster={videoDetails.image}></video>
      </div>
    </section>
  )
}

export default HeroVideo