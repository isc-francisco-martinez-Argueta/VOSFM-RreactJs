import React, { useState } from "react";

const Reproductor = () => {
  let popiedadescss = "player__btn player__btn--medium blue play";
  let popiedadescssplay = "player__btn player__btn--medium red play";
  const [play, setPlay] = useState(popiedadescss);

  let radiUrl =
    "https://us1freenew.listen2myradio.com/live.mp3?typeportmount=s1_5228_stream_677425204";

  const playpause = () => {
    let audio = document.getElementById("audio");
    if (audio.paused || audio.ended) {
      setPlay(popiedadescssplay);
      audio.play();
    } else {
      setPlay(popiedadescss);
      audio.pause();
    }
  };

  return (
    <>
      <div className="miradio">
        <audio type="audio/mpeg" className="player__audio" controls id="audio">
          <source src={radiUrl} type="audio/mpeg" />
        </audio>
        <button className={play} id="play" onClick={playpause}></button>
      </div>
    </>
  );
};

export default Reproductor;
