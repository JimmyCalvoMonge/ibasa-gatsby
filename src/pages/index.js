import * as React from "react"
import { SEO } from "../components/seo"

// Import styles
import "../styles/bootstrap.min.css";
import "../styles/open-iconic-bootstrap.min.css"
import "../styles/animate.css"
import "../styles/owl.carousel.min.css"
import "../styles/owl.theme.default.min.css"
import "../styles/magnific-popup.css"
import "../styles/aos.css"
import "../styles/ionicons.min.css"
import "../styles/flaticon.css"
import "../styles/icomoon.css"
import "../styles/style.css"

// Import Home Components

import Carousel from "../components/Carousel/Carousel";
import Offer from "../components/Offer/Offer";
import About from "../components/About/About";
import Courses from "../components/Courses/Courses";
// import Teachers from "../components/Teachers/Teachers";
// import Blogs from '../components/Blogs/Blogs';
import Testimony from "../components/Testimony/Testimony";
import Gallery from "../components/Gallery/Gallery";


// Import base Layout
import Layout from "../components/layout"

const IndexPage = () => {
  return (
  <div>
      <Layout>

        <Carousel></Carousel>

        <Offer></Offer>

        <About></About>

        <Courses></Courses>

        {/* <Teachers></Teachers> */}

        {/* <Blogs></Blogs> */}

        <Testimony></Testimony>

        <Gallery></Gallery>

      </Layout>
  </div>
  )
}

export default IndexPage

export const Head = () => (
  <SEO />
)