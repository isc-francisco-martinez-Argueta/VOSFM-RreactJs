/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Herovideo.css";
import header from "./img/header.mp4";
import logo from "./img/logo.gif";
import Menuradio from "./Menuradio";

const Herovideo = () => {
  return (
    <>
      <header id="header">
        <Menuradio />
        <video
          src={header}
          type="video/mp4"
          loop
          autoPlay
          muted
          poster="img/headervideo1.png"
          id="video_background"
          preload="auto"
          volume="50"
        />
        <div className="img-header">
          <div className="welcome">
            <h1>
              <img src={logo} className="logo" alt="" />
            </h1>

            <a href="#plataformas">
              <button id="abajo">Ver abajo</button>
            </a>
          </div>
        </div>
        <div className="skew-abajo gris" />
      </header>
    </>
  );
};

export default Herovideo;
