import React from "react"
import { Link } from "gatsby"
import image1 from "../images/gatsby-icon.png"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "./index.css"

const IndexPage = () => (
  <div className="wholeform">
    <div className="header-component">
      <div className="top-row">
        <div className="top-row-image-wrapper">
          <img src={image1} />
        </div>
        <div className="top-row-image-wrapper">
          <img src={image1} />
        </div>
      </div>

      <div className="second-row">
        <ul className="nav">
          <Link to="/page-2/">Go to page 2</Link>
          <Link to="/page-2/">Go to page 2</Link>
          <Link to="/page-2/">Go to page 2</Link>
        </ul>
      </div>
    </div>
  </div>
)

export default IndexPage
