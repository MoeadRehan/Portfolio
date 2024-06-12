import profile_img from '../../assets/profile-pic.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './Hero.css'
const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I`m Moead Rehan,</span> frontend developer based in Pakistan</h1>
        <p>I am a Front-End develper from Rawalpindi, PAKISTAN with 1 year of experience in a company Solution Tech.</p>
        <div className='hero-action'>
            <div className='hero-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
            <a href='/Resume.pdf' target='_blank' rel='noopener noreferrer'>
            <div className='hero-resume'>My Resume</div>
            </a>
            
        </div>
    </div>
  )
}

export default Hero