import React from 'react'
import './navBar.css'
import { useState } from 'react'

export default function NavBar() {
    const [isClicked, setIsClicked] = useState(false)
    const handleClick = () => setIsClicked(!isClicked)

  return (
    <div className='navBar'>
        <div className='navBarLogo'>
            <img className='navBarLogoImg' src='../../../assets/logo.png' alt='DSC Logo' />
        </div>
        <div >
            <ul className={isClicked?'navBarLinks active':'navBarLinks'}>
              <li><a href='#'>About Us</a></li>
              <li><a href='#'>Tracks</a></li>
              <li><a href='#'>Prizes</a></li>
              <li><a href='#'>Sponsors</a></li>
              <li><a href='#'>FAQs</a></li>
            </ul>
        </div>

        <div className='mobile'>
          <i className={isClicked?'fas fa-times':'fas fa-bars'} onClick={handleClick}></i>
        </div>
    </div>
  )
}
