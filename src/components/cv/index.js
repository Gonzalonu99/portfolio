import React from 'react'
import './styles.css'

const DownloadButton = () => {
  return (
    <div className='cv-div-button'>
        <button className='download-cv'><a href="" className='download-text' download>Download CV</a></button>
    </div>
  )
}

export default DownloadButton