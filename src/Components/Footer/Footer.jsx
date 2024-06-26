import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubscribe = () => {
    if (!email) {
      alert('Please enter an email address.');
      return;
    }

    fetch('https://httpbin.org/post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })
      .then((response) => {
        if (!response.ok) {
          // If the response status code is not in the range 200-299
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Success:', data);
        alert('Subscribed successfully!');
        setEmail('');
        

      })
      .catch((error) => {
        console.error('Error:', error);
        alert('There was an error subscribing. Please try again later.');
      });
  };


  return (
    <div className='footer'>
      <div className='footer-top'>
        <div className='footer-top-left'>
          <img src={footer_logo} alt="Logo" />
          <p>I am a Front-End develper from Rawalpindi, PAKISTAN with 1 year of experience in a company Solution Tech.</p>
        </div>
        <div className='footer-top-right'>
          <div className='footer-email-input'>
            <img src={user_icon} alt="" />
            <input type="email" placeholder='Enter your Email' value={email} onChange={handleEmailChange}/>
          </div>
          <div className='footer-subscribe' onClick={handleSubscribe}>Subscribe</div>
        </div>
      </div>
      <hr />
      <div className='footer-bottom'>
        <p className='footer-bottom-left'>@ 2023 Moead Rehan. All rights reserved.</p>
        <div className='footer-bottom-right'>
        <p>
        <Link id='service' to="/terms-of-service">Terms of Service</Link>
      </p>
      <p>
        <Link id='privacy' to="/privacy-policy">Privacy Policy</Link>
      </p>
            
          <p><AnchorLink id='contact' className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></p>
        </div>
      </div>
    </div>
  )
}

export default Footer