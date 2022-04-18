import React from 'react';
import "./Why.css";
import el1 from "../../assets/images/icon-online.svg";
import el2 from "../../assets/images/icon-budgeting.svg";
import el3 from "../../assets/images/icon-onboarding.svg";
import el4 from "../../assets/images/icon-api.svg";

const Why = () => {
  return <div>
    <div className="cont">
      <div className="why">
        <h1>Why choose Easybank?</h1>
      </div>
      <div className="why--par">
        <p>We leverage Open Banking to turn your bank account into your financial hub.
          Control your finances like never before</p>
      </div>
      <div className="els flex">
        <div className="el1 el">
          <div className="image-cont">
            <img src={el1} alt="el1" />
          </div>
          <h4>Online Banking</h4>
          <p>Our modern web and mobile applications allow you to keep
            track of your finances wherever you are in the world.
          </p>
        </div>
        <div className="el2 el">
          <div className="image-cont">
            <img src={el2} alt="el2" />
          </div>
          <h4>Simple Budgeting</h4>
          <p>See exactly where your money goes each month. Receive
            notifications when you are close to hitting your limits.
          </p>
        </div>
        <div className="el3 el">
          <div className="image-cont">
            <img src={el3} alt="el3" />
          </div>
          <h4>Fast Onboarding</h4>
          <p>We don't do branches.Open your account in minutes online and start
            taking control of your finances right away.
          </p>
        </div>
        <div className="el4 el">
          <div className="image-cont">
            <img src={el4} alt="el4" />
          </div>
          <h4>Open API</h4>
          <p>Manage your savings, investments, pension, and much more from one account.
            Tracking your money has never been easier.
          </p>
        </div>
      </div>
    </div>
  </div>;
};

export default Why;
