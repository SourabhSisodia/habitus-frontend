import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper";

import "./Blogs.css";
import card from "../../assets/hero.png";
function Blogs() {
  return (
    <div className="blogs">
      <Swiper
        slidesPerView={3}
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
        <div className="card-container">
          <SwiperSlide>
            <div className="card">
              <img className="blog-card-image" src={card} alt="" />
              <p className="blog-card-text">
                Lorem ipsum dolor sit amet consectetur adipiscing elit.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="card">
              <img className="blog-card-image" src={card} alt="" />
              <p className="blog-card-text">
                Lorem ipsum dolor sit amet consectetur adipiscing elit.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="card">
              <img className="blog-card-image" src={card} alt="" />
              <p className="blog-card-text">
                Lorem ipsum dolor sit amet consectetur adipiscing elit.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="card">
              <img className="blog-card-image" src={card} alt="" />
              <p className="blog-card-text">
                Lorem ipsum dolor sit amet consectetur adipiscing elit.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <img className="blog-card-image" src={card} alt="" />
              <p className="blog-card-text">
                Lorem ipsum dolor sit amet consectetur adipiscing elit.
              </p>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
      <div className="blogs-text">
        <div className="blog-text">
          <span className="yellow-color">#bl</span>
          <span className="white-color">ogs</span>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
