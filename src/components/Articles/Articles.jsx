import React from 'react';
import "./Articles.css";
import art1 from "../../assets/images/image-currency.jpg";
import art2 from "../../assets/images/image-restaurant.jpg";
import art3 from "../../assets/images/image-plane.jpg";
import art4 from "../../assets/images/image-confetti.jpg";

const Articles = () => {
  return <div className='bgcont'>
    <div className="articles">
      <h1>Latest Articles</h1>
      <div className="arts flex">
        <div className="art1 art">
          <div className="image-cont">
            <img src={art1} alt="art1" />
          </div>
          <div className="copy">

            <h6>By Claire Robinson</h6>
            <h4>Receive money in any currency with no fees</h4>
            <p>The world is getting smaller and we are becoming more mobile.
              So why should you be forced to only receive money in a single...
            </p>
          </div>
        </div>
        <div className="art2 art">
          <div className="image-cont">
            <img src={art2} alt="art2" />
          </div>
          <div className="copy">

            <h6>Wilson Hutton</h6>
            <h4>Treat yourself without worrying about money</h4>
            <p>Our simple budgeting feature allows you to separate out your spending
              and set realistic limits each month. That means you...
            </p>
          </div>
        </div>
        <div className="art3 art">
          <div className="image-cont">
            <img src={art3} alt="art3" />
          </div>
          <div className="copy">

            <h6>Wilson Hutton</h6>
            <h4>Take your EasyBank card wherever you go</h4>
            <p>We want you to enjoy your travels.This is why we don't charge any fees
              at purchase while you're abroad.We'll even show you...</p>
          </div>
        </div>
        <div className="art4 art">
          <div className="image-cont">
            <img src={art4} alt="art4" />
          </div>
          <div className="copy">

            <h6>Claire Robinson</h6>
            <h4>Our invite-only Beta accounts are now live!</h4>
            <p>After a lot of hard work by the team, we are excited to launch our closed
              beta.It's easy to request an invite through the site...</p>
          </div>
        </div>
      </div>
    </div>
  </div>;
};

export default Articles;
