import React from 'react'
import '../styles/Footer.css'

function Footer() {
  return (
    <div className='footerContainer'>
        <div className='footerTitle'>Mark W Sasse</div>
        <hr></hr>
            <div className='footerMedia'>
            <div className='footerWorks'>Works
                <p className='footerBooks'>Books</p>
                <p className='footerBlogs'>Blogs</p>
                <p className='footerPodcasts'>Podcasts</p>
            </div>
            <div className='footerAbout'>About
                <p className='footerAbout'>Biography</p>
                <p className='footerContact'>Contact</p>
                <p className='footerNews'>Newsletter</p>
            </div>
            </div>
    </div>
  )
}

export default Footer