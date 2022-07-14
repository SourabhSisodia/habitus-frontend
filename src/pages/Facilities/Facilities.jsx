import React from "react";
import "./Facilities.css";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
function Facilities() {
  return (
    <div className="facilities-page">
      <div className="facilities-page-navbar-container">
      <Navbar></Navbar>
      </div>
      <div className="facilities-page-hero-container">

      </div>
      <div className="facilities-sharing-box">
        
        <h1>#Sharing</h1>
        <p>Energy | Ideas | Space</p>
        

      </div>
      <div className="facilities-main-conatiner">

      </div>
      <div className="facilities-footer-container">
        
        <div className="facilities-footer-yellow"></div>
        <div className="facilities-footer-blue">
          <Footer></Footer>
          </div>
    </div>
    </div>
  );
}

export default Facilities;
