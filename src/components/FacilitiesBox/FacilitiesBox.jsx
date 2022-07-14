import React from "react";
import { useNavigate } from "react-router-dom";
import "./FacilitiesBox.css";
import ac from "../../assets/ac.png";
import cctv from "../../assets/cctv.png";
import gender from "../../assets/gender.png";
import electricity from "../../assets/electricity.png";
import parking from "../../assets/parking.png";
import wifi from "../../assets/wifi.png";
function FacilitiesBox() {
  const navigate = useNavigate();
  return (
    <div className="facilities-box">
      <img src={ac} alt="air conditioner" srcset="" />
      <img src={cctv} alt="cctv camera" srcset="" />
      <img src={parking} alt="parking" srcset="" />
      <img src={gender} alt="gender equality" srcset="" />
      <img src={electricity} alt="electricity 24x7" srcset="" />
      <img src={wifi} alt="high speed wifi" srcset="" />

      <div
        className="explore-facilities-button"
        onClick={() => navigate("/facilities")}
      >
        <p> EXPLORE FACILITIES</p>
      </div>
    </div>
  );
}

export default FacilitiesBox;
