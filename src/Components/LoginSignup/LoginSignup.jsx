import React from "react";
import "./LoginSignup.css";
import email from "../../../src/Assets/email.png";
import padlock from "../../../src/Assets/padlock.png";
import user from "../../../src/Assets/user.png";

const LoginSignup = () => {
  return (
    <div className="container">
      <div className="Header">
        <div className="text">
          <div className="underline"></div>
        </div>
        <div className="inputs"></div>
        <div className="input">
            <img src={user} alt=''/>
            <input type="text" placeholder="Username"/>
        </div>
        <div className="input">
            <img src={email} alt=''/>
            <input type="email" placeholder="Email"/>
        </div>
        <div className="input">
            <img src={padlock} alt=''/>
            <input type="password" placeholder="Password"/>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
