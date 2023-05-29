import React from 'react'
import '../styles/Navbar.css'
import { Link } from 'react-router-dom';
import icon from '../assets/images/markpen-nobg.png'

function Navbar() {
  return (
    <header className='navbar'>
        <img className='navIcon' src={icon} alt='Author Logo'></img>
        <div className='navContainer'>
            <div className='navLogo'>MarkWSasse</div>
            <ul className='navUL'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/books'> Books </Link></li>
                <li><Link to='/blog'>Blogs</Link></li> 
                <li><Link to='/podcast'>Podcasts</Link></li> 
                <li><Link to='/about-mark'>About Mark</Link></li> 
            </ul>
        </div>
    </header>
  )
}

export default Navbar