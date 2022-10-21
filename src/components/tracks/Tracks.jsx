import React from 'react'
import './tracks.css'

export default function Tracks() {
  return (
    <div className='tracksWrapper'>
        <div className="tracksContent">
            <h1>Wide range of <br/> <span>Tracks</span></h1>
            <p>Participate in the hackathon to explore wide range of tracks.</p>
        </div>

        <div className="tracksCards">
            <div className="tracksCard">
              <div className="tracksCardUpper">
                <img src="../../../assets/track1.svg" alt="" />
                <p>Web 2.0</p>
              </div>
              <div className="tracksCardLower">
                <p>The Web Development track revolves around building and Rendering Web pages, APIs, and other technologies.</p>
              </div>
            </div>

            <div className="tracksCard">
              <div className="tracksCardUpper">
                <img src="../../../assets/track2.svg" alt="" />
                <p>Web 3.0</p>
              </div>
              <div className="tracksCardLower">
                <p>The Web3 track offers an idea for a new iteration of the World Wide Web-based on blockchain technology.</p>
              </div>
            </div>

            <div className="tracksCard">
              <div className="tracksCardUpper">
                <img src="../../../assets/track3.svg" alt="" />
                <p>ML/AI</p>
              </div>
              <div className="tracksCardLower">
                <p>The ML/AI track expands over a diverse range of applications for day-to-day problems.</p>
              </div>
            </div>

            <div className="tracksCard">
              <div className="tracksCardUpper">
                <img src="../../../assets/track4.svg" alt="" />
                <p>Open Innovation</p>
              </div>
              <div className="tracksCardLower">
                <p>This track unlocks a mindset contrary to the secrecy and silo mentality of the traditional community.</p>
              </div>
            </div>
        </div>
    </div>
  )
}
