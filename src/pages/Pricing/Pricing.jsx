import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import cycle from "../../assets/cycle.png";
import member from "../../assets/members.png";
import "./Pricing.css"

function Pricing() {
  return <div className="pricing-page">
    <div className="pricing-page-navbar-container">
      <Navbar></Navbar>
    </div>
    <div className="pricing-title-container">
      <h1>LET'S GET <span className="blue-text">#</span><span className="yellow-color">STARTED</span></h1>
      <p>Habitus gives an opportunity to the plethora of city’s youngsters, who are already serving MNC’s and other brands across the country, to work from the comfort of their hometown.</p>
    </div>
    <div className="pricing-desk-space">
      <div className="desk-space-text">
      <h1>Desk Space</h1>
      <p>Common Area</p>
      </div>
      <div className="pricing-card-container">
      <div className="pricing-card">
        <div className="pricing-card-member">
          <img src={member} alt="" />
          <p>1</p>
        </div>
        <div className="pricing-card-image">
        <img src={cycle} alt="" />
        </div>
        <div className="pricing-card-text">
        <h1>Flexi/Hot Desk</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed faucibus odio.</p>
        </div>
      </div>
      <div className="pricing-card">
        <div className="pricing-card-member">
          <img src={member} alt="" />
          <p>1</p>
        </div>
        <div className="pricing-card-image">
        <img src={cycle} alt="" />
        </div>
        <div className="pricing-card-text">
        <h1>Flexi/Hot Desk</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed faucibus odio.</p>
        </div>
      </div>
      <div className="pricing-card">
        <div className="pricing-card-member">
          <img src={member} alt="" />
          <p>1</p>
        </div>
        <div className="pricing-card-image">
        <img src={cycle} alt="" />
        </div>
        <div className="pricing-card-text">
        <h1>Flexi/Hot Desk</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed faucibus odio.</p>
        </div>
      </div>

      <div className="pricing-card">
        <div className="pricing-card-member">
          <img src={member} alt="" />
          <p>1</p>
        </div>
        <div className="pricing-card-image">
        <img src={cycle} alt="" />
        </div>
        <div className="pricing-card-text">
        <h1>Flexi/Hot Desk</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed faucibus odio.</p>
        </div>
      </div>
      <div className="pricing-card">
        <div className="pricing-card-member">
          <img src={member} alt="" />
          <p>1</p>
        </div>
        <div className="pricing-card-image">
        <img src={cycle} alt="" />
        </div>
        <div className="pricing-card-text">
        <h1>Flexi/Hot Desk</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed faucibus odio.</p>
        </div>
      </div>
      </div>
    </div>
  </div>;
}

export default Pricing;
