import React from "react";
import "./Facilities.css";
import work from "../../assets/facilities-page/work.png";
import washroom from "../../assets/facilities-page/washroom.png";
import event1 from "../../assets/facilities-page/event-1.png";
import event2 from "../../assets/facilities-page/event-2.png";
import whiteboard from "../../assets/facilities-page/whiteboard.png";
import wifi from "../../assets/facilities-page/wifi.png";
import ac from "../../assets/facilities-page/ac.png";
import briefcase from "../../assets/facilities-page/briefcase.png";
import discount from "../../assets/facilities-page/disount.png";
import marker from "../../assets/facilities-page/marker.png";
import mic from "../../assets/facilities-page/mic.png";
import parking from "../../assets/facilities-page/parking.png";
import printer from "../../assets/facilities-page/printer.png";
import team from "../../assets/facilities-page/team.png";
import toilet from "../../assets/facilities-page/toilet.png";

import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

function Facilities() {
  return (
    <div className="facilities-page">
      <div className="facilities-page-navbar-container">
        <Navbar></Navbar>
      </div>
      <div className="facilities-page-hero-container">
        <div className="facilities-hero-work-part">
          <div className="facilities-hero-work-text">
            <h1 className="blue-text , work-text">WORK</h1>
            <h1 className="normal-text">
              INDEPENDENTLY <span className="blue-text">,</span>
            </h1>
            <h1 className="normal-text">
              NOT <span className="yellow-text-thin , strike-out">ALONE </span>
              <span className="yellow-text-thin"> !</span>
            </h1>
          </div>
          <div className="facilities-hero-work-image">
            <img src={work} alt="" />
          </div>
        </div>
        <div className="facilities-hero-definition-part">
          <p>
            Habitus Co-Working Space is a hub of essential facilities that
            provide a seamless and hassle-free working experience. Here are some
            of the facilities and benefits that you get when you choose Habitus
            for working.
          </p>
        </div>
        <div className="facilities-hero-work-facilities-part">
          <div className="facilities-hero-work-facilities-part-card , no-margin">
            <img src={wifi} alt="" />
            <p>High-Speed Internet</p>
          </div>
          <div className="facilities-hero-work-facilities-part-card">
            <img src={toilet} alt="" />
            <p>Clean and Well-Maintained Washrooms</p>
          </div>
          <div className="facilities-hero-work-facilities-part-card">
            <img src={mic} alt="" />
            <p>Creative Events Every Weekend</p>
          </div>
          <div className="facilities-hero-work-facilities-part-card">
            <img src={discount} alt="" />
            <p>Exclusive Discount on Creative Workshops</p>
          </div>
          <div className="facilities-hero-work-facilities-part-card">
            <img src={printer} alt="" />
            <p>Printer Facility</p>
          </div>
          <div className="facilities-hero-work-facilities-part-card">
            <img src={marker} alt="" />
            <p>Whiteboards and Stationery Facility</p>
          </div>
          <div className="facilities-hero-work-facilities-part-card">
            <img src={ac} alt="" />
            <p>Air Conditioner</p>
          </div>
          <div className="facilities-hero-work-facilities-part-card">
            <img src={parking} alt="" />
            <p>Basement Parking</p>
          </div>
          <div className="facilities-hero-work-facilities-part-card">
            <img src={team} alt="" />
            <p>Public Working Space</p>
          </div>
          <div className="facilities-hero-work-facilities-part-card">
            <img src={briefcase} alt="" />
            <p>Private Working Space</p>
          </div>
        </div>
      </div>
      <div className="facilities-sharing-box">
        <h1>#Sharing</h1>
        <p>Energy | Ideas | Space</p>
      </div>
      <div className="facilities-main-container">
        <div className="facilities-main-container-card">
          <img src={event1} alt="" />
          <div className="facilities-text-box">
            <h1>CREATE EVENT EVERY WEEKEND</h1>
            <p>
              Starting to notice some droopy shoulders around the office? Sounds
              like it’s time to plan a team outing. Team outings are a great way
              to facilitate bonding with your team members.
            </p>
          </div>
        </div>
        <div className="facilities-main-container-card">
          <div className="facilities-text-box">
            <h1>CREATE EVENT EVERY WEEKEND</h1>
            <p>
              We knew this idea would save anyone producing audio or video
              projects a great deal of money, President & Executive Director of
              Vista-based Inspired Images Studios.
            </p>
          </div>
          <img src={event2} alt="" />
        </div>
        <div className="facilities-main-container-card">
          <img src={whiteboard} alt="" />
          <div className="facilities-text-box">
            <h1>WHITEBOARDS AND STATIONERY FACILITY</h1>
            <p>
              Equipped with Whiteboards, the meeting rooms for conducting
              business review meetings and interviews. You can even host mentor
              sessions, innovation talks, fireside chats.
            </p>
          </div>
        </div>
        <div className="facilities-main-container-card">
          <div className="facilities-text-box">
            <h1>WELL-MAINTAINED WASHROOMS</h1>
            <p>
              This means your coworking space is a hotbed for germs to live And
              how can you maintain cleanliness as you share your office space.
              That desk can contain 400 times more germs than the toilet seats.
            </p>
          </div>
          <img src={washroom} alt="" />
        </div>
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
