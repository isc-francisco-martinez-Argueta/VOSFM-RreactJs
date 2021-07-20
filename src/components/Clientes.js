import anun1 from "./img/anunciate.png";
import anun2 from "./img/anunciate2.png";
import anun3 from "./img/anunciate3.png";
import "./Clientes.css";
const Clientes = () => {
  return (
    <>
      <section className="clientes" id="clientes">
        <div className="info-container">
          <div className="contenedor">
            <div className="slider-contenedor">
              <section className="contenido-slider">
                <img src={anun1} alt="Imagen anunciate" />
              </section>

              <section className="contenido-slider">
                <img src={anun2} alt="Imagen anunciate" />
              </section>
              <section className="contenido-slider">
                <img src={anun3} alt="Imagen anunciate" />
              </section>

              <section className="contenido-slider">
                <img src={anun1} alt="Imagen anunciate" />
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Clientes;
