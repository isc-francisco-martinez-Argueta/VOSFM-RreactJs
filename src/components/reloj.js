import React, { useState, useEffect } from "react";

const Reloj = () => {
  const [hour, setHour] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    setInterval(() => {
      setHour(new Date().toLocaleTimeString());
    }, 100);
  });
  return (
    <>
      <div className="boxinforadio">
        <div className="horareproductor">
          <div id="reloj">
            <h3>{hour}</h3>
          </div>
        </div>

        <marquee>
          <h5>EN VIVO-VOS FM</h5>
        </marquee>
      </div>
    </>
  );
};

export default Reloj;
