import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import search from "../../assets/search.png";
function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <a href="#">
          <img src={logo} alt="habitus-co-working-space" srcset="" />
        </a>
      </div>
      <div className="other-links">
        <a href="#">Home</a>
        <a href="#">Facilities</a>
        <a href="#">Pricing</a>
        <a href="#">Contact Us</a>
        <a href="#">Community</a>
        <a href="#">
          <img src={search} alt="search" srcset="" className="search" />
        </a>
      </div>
    </div>
  );
}

export default Navbar;
