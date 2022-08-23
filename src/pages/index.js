import * as React from "react"
import Layout from "../components/Layout"
import MobileNavbar from "../components/MobileNavbar"
import Navbar from "../components/Navbar"
import Hero from "../components/sections/Hero"
import Footer from "../components/sections/Footer"
import { Helmet } from "react-helmet"

const IndexPage = () => {
  return (
    <Layout>

      {/* Meta Data */}

      <Helmet htmlAttributes={{
        lang: 'en',
      }}>
        <meta charSet="utf-8" />
        <meta name="description" content="Hi, we're GoHealthy, a platform dedicated to providing health services through our app ."></meta>
        <title>MinCal</title>
        <link rel="apple-touch-icon" href="../images/favicons" />
        <link rel="icon" type="image/x-icon" href="../images/favicons/favicon.svg"></link>
      </Helmet>

      {/* Sections */}
      
      <MobileNavbar/>
      <Navbar/>
      <Hero/>
      <Footer/>

    </Layout>
  )
}

export default IndexPage