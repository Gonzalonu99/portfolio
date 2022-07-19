import React, {useEffect} from 'react'
import './about.css'
import AboutPhoto from '../../images/foto-circular.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
const AboutMe = () => {
  useEffect(() => {
    Aos.init({duration:1000})
  }, []);
  return (
    <div id='about' className='about-section' data-aos="fade-up">
      <h2 className='about-title'>
        Let me  <span className='span-title'>Introduce</span>  Myself
      </h2>
      <p className='about-description'>I am <b>Gonzalo</b>, and I am 23 years old, from <b>Buenos Aires</b>. During the quarantine I discovered my passion for web programming and my life changed.
      <br />
      <br />
        I finished my degree in <b>Fullstack developer at Numen Academy</b>  and I am currently dedicated to programming in <b>JavaScript</b>.
        I have knowledge in <b>React Js</b> for Frontend, and <b>Node Js</b> for Backend.
        <br /> 
        In addition, I contribute to the development of a <b>mobile app with Flutter</b> for the argentine startup Autoshop 360.
        <br />
        <br />
        Every day I seek to learn new things to be able to make my contribution and help the development of this beautiful world.</p>
        <div className='img-container'><img src={AboutPhoto} className='about-photo' data-aos="flip-right" data-aos-delay={200}/></div>
    </div>
  )
}

export default AboutMe