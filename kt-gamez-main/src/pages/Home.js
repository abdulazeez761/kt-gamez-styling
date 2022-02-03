import React from "react";
import Playnwin from "../components/playnwin";

import "./Home.css";
import Category from "../components/Category";

function Home() {
  return (
    <div className="home">
      {/* <div className="heading">Home</div> */}
      <Playnwin />
      <Category/>
      {/* <div className="play-n-win-cards">
        <img src={img1}></img>
        <p>battle tank</p>
      </div> */}
    </div>
  );
}

export default Home;
