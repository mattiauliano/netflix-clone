import React, { useState, useEffect } from "react";

import { BsFillPlayFill } from "react-icons/bs";
import { ImInfo } from "react-icons/im";
import { SlVolumeOff } from "react-icons/sl";
import { SlVolume2 } from "react-icons/sl";
import { MdOutlineRestartAlt } from "react-icons/md";

import trailer from "../../assets/trailer.mp4";
import title from "../../assets/title-trailer.webp";

const Banner = () => {
  // Mute / Unmute trailer
  const [muted, setMuted] = useState(true);
  // Play video
  const [play, setPlay] = useState(true);
  // Restart trailer
  const [restart, setRestart] = useState(false);
  // Display trailer description
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
          alt="Netflix Serie - Perfect Match"
          className={`title-series ${display ? null : "translate-title"}`}
        />
        <p className={`fs-400 ${display ? null : "transparent-text"}`}>
          Couple who prove their compatibility gain the power to make or break
          other matches in this strategic and seductive dating competition.
        </p>
        <div className="buttons-info-series">
          <button className="fs-600">
            <BsFillPlayFill size="2rem" />
            Play
          </button>
          <button className="fs-600">
            <ImInfo />
            More info
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
      <div className="overlay-video"></div>
    </header>
  );
};

export default Banner;
