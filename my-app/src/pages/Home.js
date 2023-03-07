import React from 'react'
import '../styles/Home.css'
import headshot from '../assets/images/mark-headshot-remove.png'
import titleBGImg from '../assets/images/background/fabien.jpg'
import titleBGImg2 from '../assets/images/background/fabienR.jpg'
import cont2BGImg from '../assets/images/background/serrano.jpg'

function Home() {
  return (
    <div>
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
        <main>
          <div className='titleContainer'>
          <img className='titleBGImg' src={titleBGImg} alt='Background Texture'></img>
          <img className='titleBGImg2' src={titleBGImg2} alt='Background Texture'></img>
            <h1>Mark W Sasse</h1>
            <img className='titleImg' src={headshot} alt='Author Title'></img>
          </div>
            {/* <div className='containerOne'>
              <div className='aboutCont'>
                  <img id='headshot' src={headshot} alt='Author'></img>
                  <hr className='dividerOne'/>
                  <h2 className='aboutName'>Mark W. Sasse</h2>
              </div>
            </div> */}
            <div className='containerTwo'>
              <div className='newReleasesContainer'>
                    <div className='newReleasesTitle'>New Releases</div>
                  <div className='newBlog'>
                    <img className='cont2BGImg' src={cont2BGImg} alt='Blurred background'></img>
                    {/* <h3>New Blog Title</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae ipsum sapien. Suspendisse efficitur, purus eget tristique pretium, tortor mi semper ante, in venenatis urna ex sit amet nibh. Nunc at ligula diam. Sed venenatis ac nulla eget tincidunt. Integer ullamcorper blandit risus eget lobortis. Fusce fermentum commodo arcu vitae fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <a href='https://www.w3schools.com/'>Read More</a> */}
                  </div>
                  <div className='newPodcast'>
                  <img className='cont2BGImg2' src={cont2BGImg} alt='Blurred background'></img>

                    {/* <h3>New Podcast Title</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae ipsum sapien. Suspendisse efficitur, purus eget tristique pretium, tortor mi semper ante, in venenatis urna ex sit amet nibh. Nunc at ligula diam. Sed venenatis ac nulla eget tincidunt. Integer ullamcorper blandit risus eget lobortis. Fusce fermentum commodo arcu vitae fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <a href='https://www.w3schools.com/'>Listen Here</a> */}
                  </div>
              </div>
            </div>



            {/* <div className='containerThree'>
              <div className='newsletter'>
                  <h2>Get all the latest MWS news</h2>
                  <div>form</div>
              </div>  
            </div> */}
        </main>
    </div>
  )
}

export default Home