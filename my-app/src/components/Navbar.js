import React from 'react'
import '../styles/Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
        <div className='navContainer'>
            <div className='navLogo'>MarkWSasse</div>
            <ul>
                <li>Home</li>
                <li>Books</li>
                <li>Blogs</li> 
                <li>Podcasts</li> 
                <li>About Mark</li> 
            </ul>
        </div>
    </div>
  )
}

export default Navbar