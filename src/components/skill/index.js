import React, {useEffect} from 'react'
import Css from './icons/Css'
import Html from './icons/Html'
import JavaScript from './icons/JavaScript'
import NodeIcon from './icons/Node'
import ReactIcon from './icons/ReactIcon'
import MongoIcon from '../../images/64px_mongodb_icon.png'
import './skillset.css'
import Git from './icons/Git'
import FlutterIcon from '../../images/flutter_logo_icon.png'
import PostmanIcon from '../../images/postman-icon.png'
import VisualStudioIcon from '../../images/visual-studio-icon.png'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Skillset = () => {
  useEffect(() => {
    Aos.init({duration:800})
  }, []);
  return (
    <div id='skills' className='skill-section' data-aos="fade-up">
      <h1 className='skill-title'>Professional  <span className='span-title'>Skillset</span></h1>
      <div className='icons-container' data-aos="zoom-in-down" data-aos-duration={1300}>
        <div className='skill-card'>
          <div className='icon-div'><Html /></div>
          <h5 className='skill-name'>HTML5</h5>
        </div>
        <div className='skill-card'>
          <div className='icon-div'><Css /></div>
          <h5 className='skill-name'>CSS3</h5>
        </div>
        <div className='skill-card'>
          <div className='icon-div'><JavaScript /></div>
          <h5 className='skill-name'>JavaScript</h5>
        </div>
        <div className='skill-card'>
          <div className='icon-div'><ReactIcon/></div>
          <h5 className='skill-name'>ReactJs</h5>
        </div>
        <div className='skill-card'>
          <div className='icon-div'><NodeIcon/></div>
          <h5 className='skill-name'>NodeJs</h5>
        </div>
        <div className='skill-card'>
          <div className='icon-div'><img src={MongoIcon} alt="" className='mongo-icon'/></div>
          <h5 className='skill-name'>MongoDb</h5>
        </div>
        <div className='skill-card'>
          <div className='icon-div'><Git/></div>
          <h5 className='skill-name'>Git</h5>
        </div>
        <div className='skill-card'>
          <div className='icon-div'><img src={FlutterIcon} /></div>
          <h5 className='skill-name'>Flutter</h5>
        </div>
      </div>
      <h1 className='skill-title skill-subtitle'><span className='span-title'>Tools</span>  I Use</h1>
      <div className='icons-container' data-aos="zoom-in-up" data-aos-duration={1000}>
        <div className='skill-card'>
          <div className='icon-div'><img src={PostmanIcon}/></div>
          <h5 className='skill-name'>Postman</h5>
        </div>
        <div className='skill-card'>
          <div className='icon-div'><img src={VisualStudioIcon} /></div>
          <h5 className='skill-name'>Visual Studio</h5>
        </div>  
      </div>
    </div>
  )
}

export default Skillset