import React from "react";
import "./LoginSignup.css";

const LoginSignup = () => {
  return (
    <div className="container">
      <div className="Header">
        <div className="text">
          <div className="underline"></div>
        </div>
        <div className="inputs"></div>
        <div className="input">
            <img src="" alt=''/>
            <input type="text" placeholder="Username"/>
        </div>
        <div className="input">
            <img src="" alt=''/>
            <input type="email" placeholder="Email"/>
        </div>
        <div className="input">
            <img src="" alt=''/>
            <input type="password" placeholder="Password"/>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
