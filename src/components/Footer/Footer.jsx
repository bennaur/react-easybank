import React from 'react';
import "./Footer.css";
import logo from "../../assets/images/logo.svg";
import insta from "../../assets/images/icon-instagram.svg";
import face from "../../assets/images/icon-facebook.svg";
import tw from "../../assets/images/icon-twitter.svg";
import yt from "../../assets/images/icon-youtube.svg";
import pint from "../../assets/images/icon-pinterest.svg";

const Footer = () => {
  return <div className='footerbgcont'>
    <div className="footer">
      <div className="image-cont logo">
        <img src={logo} alt="logo " />
      </div>
      <div className="footerflex socials">
        <div className="image-cont">
          <img src={face} alt="face" />
        </div>
        <div className="image-cont">
          <img src={yt} alt="yt" />
        </div>
        <div className="image-cont">
          <img src={tw} alt="tw" />
        </div>
        <div className="image-cont">
          <img src={pint} alt="pint" />
        </div>
        <div className="image-cont">
          <img src={insta} alt="insta" />
        </div>
      </div>
      <div className="footerflex emmet">
        <div className="footerflex em emmet1">
          <ul>
            <li>About Us</li>
            <li>Contact</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="footerflex em emmet2">
          <ul>
            <li>Careers</li>
            <li>Support</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>

      <button>Request Invite</button>
      <p>© Easybank.All Rights Reserved</p>


    </div>
  </div>;
};

export default Footer;
