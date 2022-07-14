import React from "react";

import { useLocation } from "react-router-dom";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import search from "../../assets/search.png"
import searchGrey from "../../assets/search grey.png"
function Navbar() {
  const location = useLocation();
  const styles = {
    color: "#696969",
  };

  if (location.pathname === "/") {
    styles.color = "white";
  }

  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="habitus-co-working-space" srcset="" />
        </Link>
      </div>
      <div className="other-links">
        <NavLink style={styles} to="/">
          Home
        </NavLink>
        <NavLink style={styles} to="/facilities">
          Facilities
        </NavLink>
        <NavLink style={styles} to="/pricing">
          Pricing
        </NavLink>
        <NavLink style={styles} to="/contactUs">
          Contact Us
        </NavLink>
        <NavLink style={styles} to="/community">
          Community
        </NavLink>
        <NavLink style={styles} to="/search">
          <img
            src={location.pathname === "/" ? search : searchGrey}
            alt="search"
            srcset=""
            className="search"
          />
          
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
