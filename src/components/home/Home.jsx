import React from 'react'
import './home.css'

const Home = () => {
  return (
    <div className='homeWrapper'>
        <div className='homeContent'>
          <h1 className='homeTitle'> <span>HACK-TECK FEST</span> is here. <br/>Are you ready?</h1>
          <p className='homeDescription'>
          Get ready its gonna be HECTIC
          </p>
          <div className='homeButtons'>
              <div className='homeButton btn1'>
                  <img className='homeButtonLogo' src='../../../assets/ic_devfolio.svg' alt='logo' />
                  <a className='homeButtonDesc' href='https://hackteckfest.tech/'>Go to dashboard</a>
              </div>

              <div className='homeButton btn2'>
                  <img className='homeButtonLogo' src='../../../assets/ic_discord.svg' alt='logo' />
                  <a className='homeButtonDesc' href='https://hackteckfest.tech/'>Join our Discord</a>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Home