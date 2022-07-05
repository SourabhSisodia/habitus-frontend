import React from 'react'
import Header from '../../components/Header/Header'
import Serving from '../../components/Serving/Serving'
import Definition from '../../components/Definition/Definition'
import AboutUs from '../../components/AboutUs/AboutUs'
import Facilities from '../../components/Facilities/Facilities'
import Footer from '../../components/Footer/Footer'
import "./Home.css"
function Home() {
  return (
    <div className='Home'>
      <div className="header-container">
        <Header></Header>
      </div>
      <div className="serving-container">
       <Serving></Serving>
      </div>
      <div className="definition-container">
        <Definition></Definition>
      </div>
      <div className="about-us-container">
        <AboutUs></AboutUs>
      </div>
    <div className="facilities-container">
      <Facilities></Facilities>
      </div>
      <div className="footer-container">
        <div className="footer-blue"></div>
        <div className="footer-yellow">
          <Footer></Footer>
        </div>
      </div>
      </div>
  )
}

export default Home