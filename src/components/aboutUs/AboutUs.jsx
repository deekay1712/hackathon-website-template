import React from 'react'
import "./aboutUs.css"

export default function AboutUs() {
  return (
    <div className='aboutUsWrapper'>
      <div className="aboutUsContent">
        <h1>Know more <br/> <span>About Us</span></h1>
        <p>Hack-Tech fest is a hackathon brought to you by Coding Club DSC where students have the opportunity to innovate new ideas, discover different paths, and push the boundaries of technology. We are a part of a bigger technology revolution aimed at instilling creativity in the University‘s fundamental culture.</p>
      </div>
      <div className="aboutUsImageCards">
        <div className="aboutUsImageCard">
          <img src="../../../assets/event1.jpg" alt="aboutUsImage" />
        </div>
        <div className="aboutUsImageCard">
          <img src="../../../assets/event2.jpg" alt="aboutUsImage" />
        </div>
      </div>
    </div>
  )
}
