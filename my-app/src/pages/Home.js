import React from 'react'
import '../styles/Home.css'
import headshot from '../assets/images/mark-headshot.webp'

function Home() {
  return (
    <div>
        <header className='heading'>
        </header>
        <main>
            <div className='containerOne'>
              <div className='aboutCont'>
                  <img id='headshot' src={headshot} alt='Author'></img>
                  <hr className='dividerOne'/>
                  <h2 className='aboutName'>Mark W. Sasse</h2>
              </div>
            </div>
            <div className='containerTwo'>
              <div className='newReleasesContainer'>
                    <h2 className='newReleasesTitle'>New Releases</h2>
                <div className='newContent'>
                  <div className='newBlog'>
                    {/* <h3></h3>
                    <p></p>
                    <button></button> */}
                  </div>
                  <div className='newPodcast'></div>
                </div>
              </div>
            </div>



            <div className='containerThree'>
              <div className='newsletter'>
                  <h2>Get all the latest MWS news</h2>
                  <div>form</div>
              </div>  
            </div>
            <footer className='footing'>
            </footer>
        </main>
    </div>
  )
}

export default Home