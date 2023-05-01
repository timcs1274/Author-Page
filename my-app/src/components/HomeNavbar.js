import React from 'react'
import '../styles/HomeNavbar.css'
// import { Link } from 'react-router-dom';


function HomeNavbar() {
    return (
        <header className='homeNav'>
                <div className='homeNavContainer'>
                    <div className='homeNavLogo'>MarkWSasse</div>
                    <ul>
                        <li>Home</li>
                        <li>Books</li>
                        <li>Blogs</li> 
                        <li>Podcasts</li> 
                        <li>About Mark</li> 
                    </ul>
                </div>
        </header>
    )
}


export default HomeNavbar
