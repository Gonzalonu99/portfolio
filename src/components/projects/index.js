import React from 'react'
import Gallery from './Cards'
import './projects.css'

const ProjectSection = () => {
  return (
    <div className='projects-section'>
        <h1 className='skill-title'>My recents  <span className='span-title'>Works</span></h1>
        <Gallery/>
    </div>
  )
}

export default ProjectSection