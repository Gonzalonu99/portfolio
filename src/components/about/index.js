import React from 'react'
import './about.css'
import AboutPhoto from '../../images/foto-circular.png'
const AboutMe = () => {
  return (
    <div id='about' className='about-section'>
      <h1 className='about-title'>LET ME<p>INTRODUCE</p>MYSELF</h1>
      <p className='about-description'>I am <b>Gonzalo</b>, and I am 23 years old, from <b>Buenos Aires</b>. During the quarantine I discovered my passion for web programming and my life changed.
      <br />
      <br />
        I finished my degree in <b>Fullstack developer at Numen Academy</b>  and I am currently dedicated to programming in <b>JavaScript</b>.
        I have knowledge in <b>React Js</b> for Frontend, and <b>Node Js</b> for Backend.
        <br /> 
        In addition, I contribute to the development of a <b>mobile app with Flutter</b> for the argentine startup Autoshop 360.
        <br />
        <br />
        Every day I seek to learn new things to be able to contribute my grain of sand and help the development of this beautiful world.</p>
        <div className='img-container'><img src={AboutPhoto} className='about-photo' /></div>
    </div>
  )
}

export default AboutMe