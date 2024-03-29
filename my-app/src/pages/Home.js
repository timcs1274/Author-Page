import React, { useEffect } from 'react';
import '../styles/Home.css';

import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import markPen from '../assets/images/markpen.jpg';
import { initializeCarousel } from '../helpers/Carousel.js';
import { initializeCarousel2 } from '../helpers/Carousel.js';
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


import dearHigh from '../assets/images/plays/Dear High School2.jpg';
import theatricalDuets from '../assets/images/plays/TheatricalDuets COVER.jpg';
import coverFront from '../assets/images/plays/coverFrontonly.jpg';
import talesOfRedemption from '../assets/images/plays/tales of redempion front cover.jpg';
import talesOfWonder from '../assets/images/plays/tales of wonder front only.jpg';



function Home() {
  useEffect(() => {
    initializeCarousel();
  }, []);

  useEffect(() => {
    initializeCarousel2();
  }, []);


  // Mailer pop-up
  useEffect(() => {
    const script = document.createElement('script');
    script.innerHTML = `
      (function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
      .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
      n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
      (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
      ml('account', '347858');
    `;
    document.head.appendChild(script);
  
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  // mailer embedded
  useEffect(() => {
    const script = document.createElement('script');
    script.innerHTML = `
      (function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
      .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
      n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
      (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
      ml('account', '347858');
    `;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div>
      <main>
        <div className='titleContainer'>
          <h1>Mark<br></br> W <br></br> Sasse</h1>
          <img className='titleImg' src={markPen} alt='Author'></img>
        </div>
            
        <div className='carouselContainer'>
          <div className='carouselSlide'>
            <h3 className='novels-h3'>Novels</h3>
            <div className="scene">
              <div className="carousel">
                <div className="carousel__cell"><img src={africanConnection} alt="Book: African Connection" /></div>
                <div className="carousel__cell"><img src={banyan} alt="Book: Reach of the Banyan Tree" /></div>
                <div className="carousel__cell"><img src={beautyRising} alt="Book: Beauty Rising" /></div>
                <div className="carousel__cell"><img src={christmas45} alt="Book: Christmas45" /></div>
                <div className="carousel__cell"><img src={diamond} alt="Book: Diamond" /></div>
                <div className="carousel__cell"><img src={lostLineup} alt="Book: Lost Lineup" /></div>
                <div className="carousel__cell"><img src={loveStory} alt="Book: Love Story" /></div>
                <div className="carousel__cell"><img src={manTooOld} alt="Book: Man Too Old" /></div>
                <div className="carousel__cell"><img src={moses} alt="Book: Moses the Singer" /></div>
                <div className="carousel__cell"><img src={partingInTheSky} alt="Book: Parting in the Sky" /></div>
                <div className="carousel__cell"><img src={recluse} alt="Book: Recluse" /></div>
                <div className="carousel__cell"><img src={whichHalf} alt="Book: Which Half David" /></div>
              </div>
            </div>
            <div className='carouselBtns'>
              <button className="previous-button"><NavigateBeforeIcon fontSize="large" /></button>
              <button className="next-button"><NavigateNextIcon fontSize="large" /></button>
            </div>
          </div>

          <div className='carouselSlide'>
            <h3 className='plays-h3'>Plays</h3>
            <div className="scene2">
              <div className="carousel2">
                <div className="carousel__cell2"><img src={dearHigh} alt="Play: Dear High School" /></div>
                <div className="carousel__cell2"><img src={theatricalDuets} alt="Play: Theatrical Duets" /></div>
                <div className="carousel__cell2"><img src={coverFront} alt="Play: Cover Front" /></div>
                <div className="carousel__cell2"><img src={talesOfRedemption} alt="Play: Tales of Redemption" /></div>
                <div className="carousel__cell2"><img src={talesOfWonder} alt="Play: Tales of Wonder" /></div>
              </div>
            </div>
            <div className='carouselBtns2'>
              <button className="previous-button2"><NavigateBeforeIcon fontSize="large" /></button>
              <button className="next-button2"><NavigateNextIcon fontSize="large" /></button>
            </div>
          </div>
        </div>

        <div className='containerTwo'>
          <div className='newReleasesContainer'>
            <div className='newReleasesTitle'>New Releases</div>
            <div className='newBlog'>
              <h3>New Blog Title</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae ipsum sapien. Suspendisse efficitur, purus eget tristique pretium, tortor mi semper ante, in venenatis urna ex sit amet nibh. Nunc at ligula diam. Sed venenatis, risus eu interdum efficitur, ante orci convallis mi, vitae aliquet purus urna ac est. Nam id velit quis mauris hendrerit consectetur.</p>
              <button>Read More</button>
            </div>

            <div className='newPoetry'>
              <h3>New Poetry Title</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae ipsum sapien. Suspendisse efficitur, purus eget tristique pretium, tortor mi semper ante, in venenatis urna ex sit amet nibh. Nunc at ligula diam. Sed venenatis, risus eu interdum efficitur, ante orci convallis mi, vitae aliquet purus urna ac est. Nam id velit quis mauris hendrerit consectetur.</p>
              <button>Read More</button>
            </div>
          </div>

          <div className='authorContainer'>
            <h2>About Mark W Sasse</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae ipsum sapien. Suspendisse efficitur, purus eget tristique pretium, tortor mi semper ante, in venenatis urna ex sit amet nibh. Nunc at ligula diam. Sed venenatis, risus eu interdum efficitur, ante orci convallis mi, vitae aliquet purus urna ac est. Nam id velit quis mauris hendrerit consectetur.</p>
            <button>Read More</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
