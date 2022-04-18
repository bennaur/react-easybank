import './NavBar.css';
import logo from "../../assets/images/logo.svg";
import hamburger from "../../assets/images/icon-hamburger.svg";
import close from "../../assets/images/icon-close.svg";



import React from 'react';

const NavBar = ({ menu, click }) => {



  return <div>
    <div className="navBar--cont">
      <div className="navBar">
        <div className="navlogo img-cont">
          <img src={logo} alt="logo" />
        </div>
        <div className="homeNav">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Blog</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className="request">
          <button>Request Invite</button>
        </div>
        <div className="hamburger img-cont" onClick={() => click()}>
          <img src={menu ? close : hamburger} alt="hamburger" />
        </div>
      </div>

    </div>
  </div>;
};

export default NavBar;
