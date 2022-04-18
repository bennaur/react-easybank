import './Header.css';
import React from 'react';
import front from '../../assets/images/image-mockups.png';

const Header = ({ menu }) => {
  
  return <div className="grid">
    <div className="parole">
      <h1>Next Generation Digital Banking</h1>
      <p>Take your financial life online. Your Easybank account will be
        a  one-stop-shop for spending, saving, budgeting, investing, and
        much more</p>
      <button id="button">Request Invite</button>
    </div>
    <div className="images">
      <img src={front} alt="ds" />

    </div>
    {
      menu &&
      <div className="menu-container">
        <div className="slide-in-top">
          <div className="center">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Blog</li>
              <li>Careers</li>
            </ul>
          </div>
        </div>
      </div>
    }
  </div>
};

export default Header;
