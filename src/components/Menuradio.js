import React, { useState } from "react";
import "./Menuradio.css";
import Reloj from "./reloj";
import Reproductor from "./Reproductor";

const Menuradio = () => {
  let aparecer = "menu ";
  let ocultar = "menu menuocultar";
  const [menu, setMenu] = useState(aparecer);
  //Scroll Efect
  //let menuContent = document.querySelector(".menu");
  let prevScrollPos = window.pageYOffset;

  window.onscroll = () => {
    //Hide & Show - Scroll Menu (Function)
    let currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
      setMenu(aparecer);
    } else {
      setMenu(ocultar);
    }
    prevScrollPos = currentScrollPos;
  };

  return (
    <>
      <nav className={menu}>
        <div className="logo-box">
          <Reproductor />
          <Reloj />
        </div>
      </nav>
    </>
  );
};

export default Menuradio;
