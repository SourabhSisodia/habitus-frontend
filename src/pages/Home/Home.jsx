import React from "react";
import Header from "../../components/Header/Header";
import Serving from "../../components/Serving/Serving";
import Definition from "../../components/Definition/Definition";
import AboutUs from "../../components/AboutUs/AboutUs";
import FacilitiesBox from "../../components/FacilitiesBox/FacilitiesBox";
import Footer from "../../components/Footer/Footer";
import Blogs from "../../components/Blogs/Blogs";
import "./Home.css";
function Home() {
  return (
    <div className="home">
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
        <FacilitiesBox></FacilitiesBox>
      </div>
      <div className="blogs-parent-container">
        <div className="yellow-box"></div>
        <div className="blogs-container">
          <Blogs></Blogs>
        </div>
      </div>
      <div className="footer-container">
        <div className="footer-blue"></div>
        <div className="footer-yellow">
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
}

export default Home;
