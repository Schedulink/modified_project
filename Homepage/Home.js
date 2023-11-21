import React from "react";
import "./Home.css";
// import Head from "./../Head";
// import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div>
      {/* <Head /> */}
      <div className="home-container">
        <div className="animation">
          <div className="schedulink">ScheduLink</div>
          <a href="/main" className="get-started-button">
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
