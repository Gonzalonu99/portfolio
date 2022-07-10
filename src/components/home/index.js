import React from 'react'
import Typewriter from './Typewriter'
import HomePhoto from '../../images/home-man-photo_adobe_express.png'
import './home.css'

const HomeSection = () => {
  return (
    <div>
        <div className='home-container'>
            <div className='text-container'>
                <h3>Hi there!</h3>
                <h2>I'm <h2 className='mi-nombre'>Gonzalo Núñez</h2></h2>
                <h1 className='type-text'><Typewriter/></h1>
            </div>
            <div className='image-container'><img src={HomePhoto} className='home-image'/></div>
        </div>
    </div>
  )
}

export default HomeSection