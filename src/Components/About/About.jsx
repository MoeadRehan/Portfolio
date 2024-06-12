import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/About_pic.png'
 const About = () => {
  return (
    <div id='about' className='about'>
        <div className='about-title'>
            <h1>About Me</h1>
            <img src={theme_pattern}/>
        </div>
        <div className='about-section'>
            <div className='about-left'>
                <img src={profile_img} alt="" />
            </div>
            <div className='about-right'>
                <div className='about-para'>
                    <p>
                    As an innovative Front-End Developer, I specialize in creating interactive and visually stunning web applications that captivate users. With a keen eye for design and a passion for cutting-edge technologies, I transform complex problems into elegant solutions. My expertise in HTML, CSS, JavaScript, and React ensures a seamless and engaging user experience across all devices.
                    </p>
                </div>
                <div className='about-skills'>
                    <div className='about-skill'><p>HTML & CSS</p> <hr className='html-css'/></div>
                    <div className='about-skill'><p>React JS</p> <hr className='react-js' /></div>
                    <div className='about-skill'><p>JavaScriot</p> <hr className='js' /></div>
                    <div className='about-skill'><p>Git & Github</p> <hr className='next-js' /></div>
                </div>
            </div>
        </div>
        <div className='about-achievements'>
            <div className='about-achievement'>
                <h1>1+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className='about-achievement'>
                <h1>90%</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className='about-achievement'>
                <h1>95%</h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>
    </div>
  )
}

export default About