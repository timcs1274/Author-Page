import React from 'react'
import '../styles/HomeNavbar.css'
// import { Link } from 'react-router-dom';
import icon from '../assets/images/background/placeholdericon.png'


function HomeNavbar() {
    return (
        <header className='homeNav'>
            <img className='homeNavIcon' src={icon} alt='Author Logo'></img>
            <div className='homeNavContainer'>
                <div className='homeNavLogo'>MarkWSasse</div>
                <ul>
                    <li>Home</li>
                    <li>Books</li>
                    <li>Blogs</li> 
                    <li>Podcasts</li> 
                    <li>About</li> 
                </ul>
            </div>
        </header>
    )
}


export default HomeNavbar
