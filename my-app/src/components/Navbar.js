import React from 'react'
import '../styles/Navbar.css'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='navbar'>
        <div className='navContainer'>
            <div className='navLogo'>MarkWSasse</div>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/books'> Books </Link></li>
                <li><Link to='/blog'>Blogs</Link></li> 
                <li><Link to='/podcast'>Podcasts</Link></li> 
                <li><Link to='/about-mark'>About Mark</Link></li> 
            </ul>
        </div>
    </div>
  )
}

export default Navbar