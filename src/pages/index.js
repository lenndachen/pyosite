import React from "react"
import Logopyo from "../images/PYO Logo.png"
import "./index.css"
import logoimages from "../images/Logos.png"
import groupphoto from "../images/highcompress-fallhomecoming.jpg"

const IndexPage = () => (
  <div className="wholeform">
    <div className="header-component">
      <div className="top-row">
        <div className="top-row-image-wrapper">
          <img className="Pyologo" alt="pyologo" src={Logopyo} />
        </div>
        <div className="top-row-second-column-wrapper">
          <div className="number-wrapper">
            <p className="call">Call Us:</p>
            <p>919-536-4230</p>
          </div>
          <div>
            <input className="searchbox" type="text" placeholder="Search..." />
          </div>
          <div className="second-row-image-wrapper">
            <img alt="logos" src={logoimages} />
          </div>
        </div>
      </div>

      <div className="second-row">
        <ul className="nav">
          <li className="word homebtn">Home</li>
          <li className="word">About Us</li>
          <li className="word">Who We Serve</li>
          <li className="word">News & Events</li>
          <li className="word">Join</li>
          <li className="word">Contact</li>
          <li className="word donatebtn">
            <strong>Donate</strong>
          </li>
        </ul>
      </div>
    </div>
    <div className="background-wrapper">
      <div className="bigphoto-container">
        <img alt="groupphoto" src={groupphoto} />
        <div className="tracking-in-contract-bck">
          <strong>Creating Opportunities</strong>
        </div>
      </div>
    </div>
  </div>
)

export default IndexPage
