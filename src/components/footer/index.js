import React, {useEffect} from 'react'
import './footer.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedin, faInstagram} from '@fortawesome/free-brands-svg-icons'

const FooterSection = () => {
  useEffect(() => {
    Aos.init({duration:1000})
  }, []);
  return (
    <div id='contact' className='footer-section' >
      <div className="animation" data-aos="fade-right">
        <h3 className="footer-title"><b className='footer-b'>Gonzalo Núñez</b></h3>
                <p className='footer-text'>Feel free to contact me</p>
                <div className="buttons" >
                    <button className='social-media-button'>
                    <a className='social-media-icon' href="https://github.com/Gonzalonu99"><FontAwesomeIcon icon={faGithub} /></a>
                </button>
                <button className='social-media-button'>
                    <a className='social-media-icon' href="https://www.linkedin.com/in/gonzalo-n%C3%BA%C3%B1ez-5a506a221/"><FontAwesomeIcon icon={faLinkedin}/></a>
                </button>
                <button className='social-media-button'>
                    <a className='social-media-icon' href="https://www.instagram.com/gonzalo.nunez99/"><FontAwesomeIcon icon={faInstagram}/></a>
                </button>
                </div>
              </div>
    </div>
  )
}

export default FooterSection