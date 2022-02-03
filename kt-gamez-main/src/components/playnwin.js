import React from "react";
import "./playnwin.css";
import img1 from "../asserts/images/Action/airattack.png";
import img2 from "../asserts/images/Arcade/boom.png";
import img3 from "../asserts/images/Education/swiper.png";
import img4 from "../asserts/images/Education/lineplayv2.png";
import img5 from "../asserts/images/Arcade/brickball.png";
import img6 from "../asserts/images/Puzzle/colorrow.png";
import img7 from "../asserts/images/SportsRacing/crazycar.png";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Playnwin() {
  return (
    <div className="play-n-win">
      <div className="anything">
      <p className="play-n-win-title">Play N Win</p>
      </div>
      
      
      <div className="team-area">
      
        <div className="single-team">
          <img src={img1} alt="" />
          <div className="team-text">
            <p>Air Attack</p>
            <button className="play-btn">play</button>
          </div>
        </div>

        <div className="single-team">
          <img src={img2} alt="" />
          <div className="team-text">
            <p>Boom</p>
            <button className="play-btn">play</button>
          </div>
        </div>

        <div className="single-team">
          <img src={img3} alt="" />
          <div className="team-text">
            <p>Swiper</p>
            <button className="play-btn">play</button>
          </div>
        </div>

        <div className="single-team">
          <img src={img4} alt="" />
          <div className="team-text">
            <p>Line Play</p>
            <button className="play-btn">play</button>
          </div>
        </div>

        <div className="single-team">
          <img src={img5} alt="" />
          <div className="team-text">
            <p>Brick Ball</p>
            <button className="play-btn">play</button>
          </div>
        </div>

        <div className="single-team">
          <img src={img6} alt="" />
          <div className="team-text">
            <p>Color Row</p>
            <button className="play-btn">play</button>
          </div>
        </div>

        {/* <div className="single-team">
          <img src={img7} alt="" />
          <div className="team-text">
            <p>Air Attack</p>
            <button className="play-btn">play</button>
          </div>
        </div> */}

        {/* <div className="single-team">
          <img src={img1} alt="" />
          <div className="team-text">
            <p>Air Attack</p>
            <button className="play-btn">play</button>
          </div>
        </div> */}
      </div>
      {/* <div className="play-n-win-cards-header">
        <div className="play-n-win-cards">
          <div className="play-n-win-img">
            <img src={img1}></img>
          </div>
          <p>battle tank</p>
        </div>
        <div className="play-n-win-cards">
          <div className="play-n-win-img">
            <img src={img1}></img>
          </div>
          <p>battle tank</p>
        </div>
        <div className="play-n-win-cards">
          <div className="play-n-win-img">
            <img src={img1}></img>
          </div>
          <p>battle tank</p>
        </div>
        <div className="play-n-win-cards">
          <div className="play-n-win-img">
            <img src={img1}></img>
          </div>
          <p>battle tank</p>
        </div>
        <div className="play-n-win-cards">
          <div className="play-n-win-img">
            <img src={img1}></img>
          </div>
          <p>battle tank</p>
        </div>
        <div className="play-n-win-cards">
          <div className="play-n-win-img">
            <img src={img1}></img>
          </div>
          <p>battle tank</p>
        </div>
        <div className="play-n-win-cards">
          <div className="play-n-win-img">
            <img src={img1}></img>
          </div>
          <p>battle tank</p>
        </div>
      </div> */}
      <Link to="/playnwin">
        <button className="see-all-btn">see All</button>
      </Link>
    </div>
  );
}

export default Playnwin;
