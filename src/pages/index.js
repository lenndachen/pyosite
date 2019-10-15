import React from "react"
import { Link } from "gatsby"
import Logopyo from "../images/PYO Logo.png"
import "./index.css"
import facebook from "../images/Facebookbtn.png"
import twitter from "../images/twitterbtn.png"
import instagram from "../images/instabtn.png"
import youtube from "../images/Youtubebtn.png"
import groupphoto from "../images/highcompress-fallhomecoming.jpg"
import afewpic from "../images/afewpic.png"
import interns from "../images/interns.jpg"
import cooking from "../images/cooking.jpg"
import annualreport from "../images/annualreport.png"
import LCCU from "../images/LCCU.jpg"
import aikenfamily from "../images/Youtube-Thumbnail-PYO-Story.png"

const IndexPage = () => (
  <div className="wholeform">
    <div className="header-container">
      <div className="top-row">
        <div className="top-row-image-wrapper">
          <img className="Pyologo" alt="pyologo" src={Logopyo} />
          <a href="https://www.facebook.com/pyopportunity" />
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
          <li className="word">
            <a
              className="homebtn"
              href="pyopportunity.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Home
            </a>
          </li>
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
    <div className="second-container">
      <div className="bigphoto-container">
        <img alt="groupphoto" src={groupphoto} />
        <div className="tracking-in-contract-bck">
          <strong>Creating Opportunities</strong>
        </div>
      </div>
    </div>
    <div className="third-container">
      <div className="section1-in-third-container">
        <div className="title-wrapper-third-container">
          <h1>
            Our <span> Mission</span>
          </h1>
        </div>
        <p className="caption-of-third-container">
          <span>
            The mission of Partners for Youth Opportunity (PYO) is to partner
            with the community to provide Durham youth with opportunities to
            connect, develop, and contribute through mentoring, employment and
            educational support.
          </span>
        </p>
      </div>
      <div className="put-together-column">
        <div className="third-container-3pics">
          <div className="fourth-container">
            <div className="section2-in-third-container">
              <div>
                <h3 className="second-title-caption-of-third-container">
                  Recent News
                </h3>
              </div>
              <div>
                <img alt="Speaker" src={afewpic}></img>
                <h3>
                  Founder of Prosperity Now, Bob Friedman, Visiting Durham
                </h3>
                <p>
                  The author and long-time advocate of wealth-building,
                  entrepreneurship and financial security as well as founder of
                  Prosperity Now, Bob Friedman will be visiting...
                </p>
              </div>
              <hr />
              <div>
                <img alt="3 interns" src={interns}></img>
                <h3>Meet PYO’s Newest Partners Melissa, Bryar & Carina</h3>
                <p>
                  Now that students have headed back to school, at PYO, new
                  associates begin rolling back in. For FY 2020, the
                  organization is honored...
                </p>
              </div>
              <hr />
              <div>
                <img alt="someone making food" src={cooking}></img>
                <h3>Crunching the Numbers</h3>
                <p>
                  Summer Internship Evaluation Metrics One Sheet Available PYO
                  internship supervisors have finalized and returned their
                  evaluations of student performances over the summer. ...
                </p>
              </div>
              <hr />
            </div>
          </div>
          <div className="section4-of-third-container">
            <img
              className="left-photo-last-photo-in-third-container"
              alt="pictures of students"
              src={LCCU}
            ></img>
            <a href="https://pyopportunity.org/wp-content/uploads/2017/11/PYO-LCCU-Case-Study_11.2.17.pdf">
              <p>Learn about our savings partnership with LCCU</p>
            </a>
          </div>
        </div>
        <div className="section4-and-section4-of-third-container">
          <div className="section3-of-third-container">
            <a
              href="https://pyopportunity.org/wp-content/uploads/2018/11/PYO-Annual-Report-2018.pdf"
              alt="annual report pdf"
            >
              <img
                className="right-photo-in-third-container"
                alt="pictures of students"
                src={annualreport}
              ></img>
              <p>View 2018 Annual Report</p>
            </a>
          </div>
          <div>
            <h3>Keep in Touch</h3>
            <p>We will send you occasional updates about PYO.</p>
          </div>
          <div className="section5-of-third-container">
            <input
              className="input-btn button"
              type="text"
              placeholder="Enter your email"
            />
            <input
              className="input-btn button"
              type="text"
              placeholder="First Name"
            />
            <input
              className="input-btn button"
              type="text"
              placeholder="Last Name"
            />
            <button className="updates-btn button">Get Updates</button>
          </div>
          <div>
            <a href="https://www.youtube.com/watch?v=s5srJ3zG5q8"/>
            <img alt="aiken family photo" src={aikenfamily}></img>
          </div>
        </div>
      </div>
      <div className="before-footer">

      </div>
      <div className="footer">

      </div>
    </div>
  </div>
)

export default IndexPage
