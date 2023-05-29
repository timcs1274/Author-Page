import React from 'react'
import '../styles/Home.css'
import markPen from '../assets/images/markpen.jpg'

function Home() {
  return (
    <div>
        <main>
          <div className='titleContainer'>
            <h1>Mark<br></br> W <br></br> Sasse</h1>
            <img className='titleImg' src={markPen} alt='Author '></img>
          </div>
            
            <div className='containerOne'>
              <h3>Novels</h3>
              <div className='bookContainer'>
                
              </div>
            </div>

            <div className='containerTwo'>
              <div className='newReleasesContainer'>
                    <div className='newReleasesTitle'>New Releases</div>

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