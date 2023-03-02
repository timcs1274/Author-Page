import React from 'react'
import '../styles/Home.css'
import headshot from '../assets/images/mark-headshot-remove.png'

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
                    <h3>New Blog Title</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae ipsum sapien. Suspendisse efficitur, purus eget tristique pretium, tortor mi semper ante, in venenatis urna ex sit amet nibh. Nunc at ligula diam. Sed venenatis ac nulla eget tincidunt. Integer ullamcorper blandit risus eget lobortis. Fusce fermentum commodo arcu vitae fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <a href='https://www.w3schools.com/'>Read More</a>
                  </div>
                  <div className='newPodcast'>
                    <h3>New Podcast Title</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae ipsum sapien. Suspendisse efficitur, purus eget tristique pretium, tortor mi semper ante, in venenatis urna ex sit amet nibh. Nunc at ligula diam. Sed venenatis ac nulla eget tincidunt. Integer ullamcorper blandit risus eget lobortis. Fusce fermentum commodo arcu vitae fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <a href='https://www.w3schools.com/'>Listen Here</a>
                  </div>
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