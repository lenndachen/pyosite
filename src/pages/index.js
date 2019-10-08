import React from "react"
import Logopyo from "../images/PYO Logo.png"
import "./index.css"
import facebook from "../images/Facebookbtn.png"
import twitter from "../images/twitterbtn.png"
import instagram from "../images/instabtn.png"
import youtube from "../images/Youtubebtn.png"
import groupphoto from "../images/highcompress-fallhomecoming.jpg"

const IndexPage = () => (
  <div className="wholeform">
    <div className="header-component">
      <div className="top-row">
        <div className="top-row-image-wrapper">
          <img className="Pyologo" alt="pyologo" src={Logopyo} />
          <a href="https://www.facebook.com/pyopportunity"/>
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
            <div className="logo-img">
              <img className="logo facebook" alt="fblogo" src={facebook} />
            </div>
            <div className="logo-img">
              <img className="logo twitter" alt="twitterlogo" src={twitter} />
            </div>
            <div className="logo-img">
              <img className="logo instagram" alt="instalogo" src={instagram} />
            </div>
            <div className="logo-img">
              <img className="logo youtube" alt="ytlogo" src={youtube} />
            </div>
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
