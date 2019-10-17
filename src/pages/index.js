import React from "react"
import { Link } from "gatsby"
import Logopyo from "../images/PYO Logo.png"
import "./index.css"
import "./styles.css"
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
import arrow from "../images/arrow.png"
import Readmore from "../pages/readmore.js"

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
          <div className="input-arrow-wrapper">
            <input className="searchbox" type="text" placeholder="Search..." />
            <img className="arrow-image" src={arrow}></img>
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
              <div className="speaker-section">
                <img className="speaker" alt="Speaker" src={afewpic}></img>
                <div className="speaker-caption">
                  <h3>
                    Founder of Prosperity Now, Bob Friedman, Visiting Durham
                  </h3>
                  <p>
                    The author and long-time advocate of wealth-building,
                    entrepreneurship and financial security as well as founder
                    of Prosperity Now, Bob Friedman will be visiting... 
                    <div className="readmore-component"><Readmore /></div>
                  </p>
                </div>
              </div>

              <div className="interns-section">
                <img className="interns" alt="3 interns" src={interns}></img>
                <div className="intern-caption">
                  <h3>Meet PYO’s Newest Partners Melissa, Bryar & Carina</h3>
                  <p>
                    Now that students have headed back to school, at PYO, new
                    associates begin rolling back in. For FY 2020, the
                    organization is honored...
                    <div className="readmore-component"><Readmore /></div>
                  </p>
                </div>
              </div>

              <div className="cooking-section">
                <img
                  className="cooking"
                  alt="someone making food"
                  src={cooking}
                ></img>
                <div>
                  <h3>Crunching the Numbers</h3>
                  <p>
                    Summer Internship Evaluation Metrics One Sheet Available PYO
                    internship supervisors have finalized and returned their
                    evaluations of student performances over the summer. ...
                    <div className="readmore-component"><Readmore /></div>
                  </p>
                </div>
              </div>

            </div>
          </div>
          <div className="section4-of-third-container">
            <img className="left-photo-last-photo-in-third-container" alt="pictures of students" src={LCCU}></img>
            <a className="link-pdf-lccu" href="https://pyopportunity.org/wp-content/uploads/2017/11/PYO-LCCU-Case-Study_11.2.17.pdf">
              <p className="paragraph-lccu">Learn about our savings partnership with LCCU</p>
            </a>
          </div>
        </div>
        <div className="section4-and-section4-of-third-container">
          <div className="section3-of-third-container">
            <a className="annual-report"
              href="https://pyopportunity.org/wp-content/uploads/2018/11/PYO-Annual-Report-2018.pdf"
              alt="annual report pdf"
            >
              <img
                className="right-photo-in-third-container"
                alt="pictures of students"
                src={annualreport}
              ></img>
              <p className="annual-report-paragraph">View 2018 Annual Report</p>
            </a>
          </div>
          <div className="keep-in-touch">
            <div className="keep">
              <h className="touch ">Keep in Touch</h>
              <p>We will send you occasional updates about PYO.</p>
            </div>
            <div className="section5-of-third-container">
              <input
                className="input-btn"
                type="text"
                placeholder="Enter your email"
              />
              <input
                className="input-btn"
                type="text"
                placeholder="First Name"
              />
              <input
                className="input-btn"
                type="text"
                placeholder="Last Name"
              />
              <button className="input-btn updates-btn">Get Updates</button>
            </div>
          </div>
          <div>
            <a href="https://www.youtube.com/watch?v=s5srJ3zG5q8" />
            <img className="aiken" alt="aiken family photo" src={aikenfamily}></img>
          </div>
        </div>
      </div>
      <div className="before-footer">
        <img src="https://pyopportunity.org/wp-content/uploads/2014/06/2016-Top-Rated-Nonprofit.png"></img>
        <img src="https://pyopportunity.org/wp-content/uploads/2014/06/proud-Member.png"></img>
        <img src="https://pyopportunity.org/wp-content/uploads/2017/03/NCAVA-Logo-North-Carolina-Association-of-Volunteer-Administration-e1489901590895.png"></img>
        <img src="https://blog.feedspot.com/wp-content/uploads/2017/11/youth_216px.png"></img>
      </div>
      <div className="footer"></div>
    </div>
  </div>
)

export default IndexPage
