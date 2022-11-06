import './HeroVideo.scss'

function HeroVideo({videoDetails}) {
  return (
    <section className='hero' >
      <video className='hero__video' controls poster={videoDetails.image}>
      </video>
    </section>
  )
}

export default HeroVideo