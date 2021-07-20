import "./Footer.css";
import fa2 from "./img/facebook.svg";
import ins2 from "./img/instagram.svg";
import what2 from "./img/whatsapp.svg";

const Footer = () => {
  let facebook = "https://www.facebook.com/search/top?q=vos%20fm%20xhboch";
  let instagram = "https://www.instagram.com/vosfmoficial/";
  let whatsapp = "https://wa.link/cwxkne";
  return (
    <>
      <footer>
        <div className="footer-social-icons">
          <ul>
            <li>
              <a href={facebook}>
                <img src={fa2} alt="" />
              </a>
            </li>
            <li>
              <a href={instagram}>
                <img src={ins2} alt="" />
              </a>
            </li>
            <li>
              <a href={whatsapp}>
                <img src={what2} alt="" />
              </a>
            </li>
          </ul>
        </div>

        <br />
        <br />
      </footer>
      <div className="footer-bottom">
        <p>
          Desarrollador Web:{" "}
          <a href="https://www.vosfm.com.mx/profile">Francisco Martinez</a>
        </p>
      </div>
    </>
  );
};

export default Footer;
