import React from 'react'
import '../styles/Navbar.css'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='navbar'>
        <div className='navContainer'>
            <div className='navLogo'>MarkWSasse</div>
            <ul>
                <li><Link to= '/'></Link>Home</li>
                <li><Link to= '/books'></Link>Books</li>
                <li><Link to= '/blog'></Link>Blogs</li> 
                <li><Link to= '/podcast'></Link>Podcasts</li> 
                <li><Link to= '/about-mark'></Link>About Mark</li> 
            </ul>
        </div>
    </div>
  )
}

export default Navbar