import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobile, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et labore,
            ex voluptates fugit repudiandae consectetur officiis veritatis
            architecto doloribus cupiditate quas tempore, blanditiis, sunt
            praesentium veniam quisquam quam quidem pariatur.
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow className="icon" />
            <div className="text">Brick Bay Drive, Sandspit, 0982</div>
          </div>

          <div className="c-item">
            <FaMobile className="icon" />
            <div className="text">phone: 021-254-2572</div>
          </div>
          <div className="c-item">
            <FaEnvelope className="icon" />
            <div className="text">Email: alex040892@gmail.com</div>
          </div>
        </div>
        <div className="col">
          <div className="title">Categories</div>
          <span className="text">Headphones</span>
          <span className="text">Smart Watches</span>
          <span className="text">Bluetooth Speakers</span>
          <span className="text">Wireless Earbuds</span>
          <span className="text">Home Theatre</span>
          <span className="text">Projectors</span>
        </div>
        <div className="col">
          <div className="title">Pages</div>
          <span className="text">Home</span>
          <span className="text">About</span>
          <span className="text">Privacy Policy</span>
          <span className="text">Returns</span>
          <span className="text">Terms & Conditions</span>
          <span className="text">Contact Us</span>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <div className="text">
            2022 CREATED BY ALEX. PREMIUM E-COMMERCE SOLUTIONS
          </div>
          <img src={Payment} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
