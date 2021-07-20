import "./Plataformas.css";
import logotuner from "./img/mytuner_logo.png";
import logolisten from "./img/logo-listener.png";
const Plataformas = () => {
  let mytuner = "https://vosfmradiobochil.radio12345.com/";
  let listner = "https://vosfmradiobochil.radio12345.com/";
  return (
    <>
      <div className="plataformasradio" id="plataformas">
        <div className="radios">
          <a href={mytuner}>
            <img src={logotuner} className="mystuner" alt="link a mytuner" />
          </a>
          <a href={listner}>
            <img src={logolisten} className="listener" alt="link a listener" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Plataformas;
