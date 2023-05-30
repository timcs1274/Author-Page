import React, { useEffect } from 'react';
import '../styles/Home.css';

import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import markPen from '../assets/images/markpen.jpg';
import { initializeCarousel } from '../helpers/Carousel.js';
import africanConnection from '../assets/images/books/AfricanConnection.jpg';
import banyan from '../assets/images/books/Banyan.jpg';
import beautyRising from '../assets/images/books/BeautyRising.jpg';
import christmas45 from '../assets/images/books/Christmas45.jpg';
import diamond from '../assets/images/books/Diamond.jpg';
import lostLineup from '../assets/images/books/LostLineup.jpg';
import loveStory from '../assets/images/books/LoveStory.jpg';
import manTooOld from '../assets/images/books/mantooold.jpg';
import moses from '../assets/images/books/Moses.jpg';
import partingInTheSky from '../assets/images/books/PartingintheSky.jpg';
import recluse from '../assets/images/books/Recluse.jpg';
import whichHalf from '../assets/images/books/whichhalf.jpg';

function Home() {
  useEffect(() => {
    initializeCarousel();
  }, []);

  return (
    <div>
      <main>
        <div className='titleContainer'>
          <h1>Mark<br></br> W <br></br> Sasse</h1>
          <img className='titleImg' src={markPen} alt='Author '></img>
        </div>
            
            
        <div className='carouselContainer'>
          <h3>Novels</h3>

        <div className="scene">
          <div className="carousel">
            <div className="carousel__cell"><img src={africanConnection} alt="Book: african Connection" /></div>
            <div className="carousel__cell"><img src={banyan} alt="Book: Reach of the Banyan Tree" /></div>
            <div className="carousel__cell"><img src={beautyRising} alt="Book: african Connection" /></div>
            <div className="carousel__cell"><img src={christmas45} alt="Book: african Connection" /></div>
            <div className="carousel__cell"><img src={diamond} alt="Book: african Connection" /></div>
            <div className="carousel__cell"><img src={lostLineup} alt="Book: african Connection" /></div>
            <div className="carousel__cell"><img src={loveStory} alt="Book: african Connection" /></div>
            <div className="carousel__cell"><img src={manTooOld} alt="Book: african Connection" /></div>
            <div className="carousel__cell"><img src={moses} alt="Book: african Connection" /></div>
            <div className="carousel__cell"><img src={partingInTheSky} alt="Book: african Connection" /></div>
            <div className="carousel__cell"><img src={recluse} alt="Book: african Connection" /></div>
            <div className="carousel__cell"><img src={whichHalf} alt="Book: african Connection" /></div>
          </div>
        </div>
        <div className='carouselBtns'>
          <button className="previous-button"><NavigateBeforeIcon fontSize="large" /></button>
          <button className="next-button"><NavigateNextIcon fontSize="large" /></button>
        </div>

        </div>
        {/* ------------------------------------------------------- */}
                

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
  );
}

export default Home;
