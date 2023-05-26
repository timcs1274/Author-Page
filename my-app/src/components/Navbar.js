import React from 'react'
import '../styles/Navbar.css'
import { Link } from 'react-router-dom';
import icon from '../assets/images/background/placeholdericon.png'

function Navbar() {
  return (
    <div className='allNavbar'>
        <div className='allNavContainer'>
        <img className='allNavIcon' src={icon} alt='Author Logo'></img>
            <div className='allNavLogo'>MarkWSasse</div>
            <ul className='allNavUl'>
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