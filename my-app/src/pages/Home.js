import React from 'react'

function Home() {
  return (
    <div>
        <header className='heading'>
        </header>
        <main>
            <div className='aboutCont'>
                <h2>Mark W. Sasse</h2>
                <img id='headshot' src='./assets/images/mark-headshot.webp' alt='Author'></img>
            </div>
            <div className='newReleases'>New Releases</div>
            <div className='newsletter'>
                <h2>Get all the latest MWS news</h2>
                <div>form</div>
            </div>
        </main>
    </div>
  )
}

export default Home