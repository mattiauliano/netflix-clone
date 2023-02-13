import React, { useState, useEffect } from "react";

import { BsFillPlayFill } from "react-icons/bs";
import { ImInfo } from "react-icons/im";
import { SlVolumeOff } from "react-icons/sl";
import { SlVolume2 } from "react-icons/sl";
import { MdOutlineRestartAlt } from "react-icons/md";

import trailer from "../assets/trailer.mp4";
import title from "../assets/title-trailer.webp";

const Banner = () => {
  const [muted, setMuted] = useState(true);
  const [play, setPlay] = useState(true);
  const [restart, setRestart] = useState(false);
  const [display, setDisplay] = useState(true);

  function handleMuted() {
    setMuted((muted) => !muted);
  }

  function handleRestart() {
    setRestart(true);
    setPlay(true);
  }

  useEffect(() => {
    setRestart(false);
    setTimeout(() => {
      setPlay(false);
    }, 94000);

    return () => {
      setPlay(true);
    };
  }, [restart]);

  useEffect(() => {
    if (play) {
      setTimeout(() => {
        setDisplay(false);
      }, 8000);
    } else {
      return;
    }

    return () => {
      setDisplay(true);
    };
  }, [play]);

  return (
    <header
      className="banner"
      style={
        !play
          ? {
              backgroundSize: "cover",
              backgroundImage:
                'url("https://occ-0-37-988.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABd_BIrcE8fZOolEYuh5IBq8sn2DGq-d6LPbH3PtWhigCrHR3kk04wm2JPNfVnNF2dmRw3oIiWlzbFWhS4k-YOwbTt4fAzf0zOjRB.jpg?r=a9f")',
              backgroundPosition: "center center",
            }
          : null
      }
    >
      {play ? (
        muted ? (
          <video className="trailer" autoPlay muted>
            <source src={trailer} type="video/mp4" />
          </video>
        ) : (
          <video className="trailer" autoPlay>
            <source src={trailer} type="video/mp4" />
          </video>
        )
      ) : null}

      <div className="info-series">
        <img
          src={title}
          alt="Serie Netflix Perfect Match"
          className={`title-series ${display ? null : "translate-title"}`}
        />
        <p className={`fs-400 ${display ? null : "transparent-text"}`}>
          Strategia e seduzione sono all'ordine del giorno in questo reality in
          cui le coppie che dimostrano la loro compatibilità possono creare o
          distruggere altre relazioni.
        </p>
        <div className="buttons-info-series">
          <button className="fs-600">
            <BsFillPlayFill size="2rem" />
            Riproduci
          </button>
          <button className="fs-600">
            <ImInfo />
            Altre info
          </button>
        </div>
      </div>
      <div className="hero-mute-pegi">
        {play ? (
          <button onClick={handleMuted}>
            {muted ? <SlVolumeOff /> : <SlVolume2 />}
          </button>
        ) : (
          <button onClick={handleRestart}>
            <MdOutlineRestartAlt />
          </button>
        )}

        <div className="pegi fs-600">13+</div>
      </div>
    </header>
  );
};

export default Banner;
