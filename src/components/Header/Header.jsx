import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper";

import "./Header.css";
import hero from "../../assets/hero.png";
import Navbar from "../Navbar/Navbar";
import BookingForm from "../BookingForm/BookingForm";
function Header() {
  return (
    <div className="header">
      <Swiper
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={hero} alt="" className="hero" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={hero} alt="" className="hero" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={hero} alt="" className="hero" />
        </SwiperSlide>
      </Swiper>

      <div className="navbar-container">
        <Navbar></Navbar>
      </div>
      <h1>
        The{" "}
        <div className="blue-rectangle">
          <span className="future">future</span>
        </div>{" "}
        <div>starts here</div>
      </h1>
      <div className="BookingForm">
        <BookingForm></BookingForm>
      </div>
    </div>
  );
}

export default Header;
