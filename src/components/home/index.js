import React, {useEffect} from 'react'
import Typewriter from './Typewriter'
import HomePhoto from '../../images/home-man-photo_adobe_express.png'
import './home.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

const HomeSection = () => {
  useEffect(() => {
    Aos.init({duration:1000})
  }, []);
  return (
    <>
        <div className='home-container' data-aos="fade-up">
            <div className='text-container'>
                <h3>Hi there!</h3>
                <h2>I'm <h2 className='mi-nombre'>Gonzalo Núñez</h2></h2>
                <h1 className='type-text'><Typewriter/></h1>
            </div>
            <div className='image-container'><img src={HomePhoto} className='home-image'/></div>
        </div>
    </>
  )
}

export default HomeSection