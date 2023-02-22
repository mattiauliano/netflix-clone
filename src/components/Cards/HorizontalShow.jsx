import React, { useState, useEffect } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { IoMdArrowDropdown, IoMdAdd } from "react-icons/io";

const HorizontalShow = ({ showUrlPath, showTitle }) => {
  const [isHoverShowFor1s, setIsHoveFor1s] = useState(false);
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    const timer =
      isHover &&
      setTimeout(() => {
        setIsHoveFor1s(true);
      }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [isHover]);

  function handleMouseEnter() {
    setIsHover(true);
  }

  function handleMouseLeave() {
    setIsHover(false);
    setIsHoveFor1s(false);
  }

  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  return (
    <div
      className="horizontal-show-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={isHoverShowFor1s ? { zIndex: 1 } : null}
    >
      <img
        src={`${BASE_URL}${showUrlPath}`}
        className="image-preview"
        alt={showTitle}
      />
      <div
        className="banner-hover-zoom"
        style={isHoverShowFor1s ? { opacity: "1" } : null}
      >
        <div className="zoom-buttons">
          <button>
            <BsFillPlayFill size={"1.5rem"} />
          </button>
          <button>
            <IoMdAdd />
          </button>
          <div className="review-buttons">
            <button style={{ display: "none" }}>nope</button>
            <button>
              <AiOutlineLike />
            </button>
            <button style={{ display: "none" }}>super</button>
          </div>
          <button>
            <IoMdArrowDropdown />
          </button>
        </div>
        <div className="zoom-infos">
          <div className="zoom-infos-generals">
            <p className="zoom-infos__compatibility">93% Match</p>
            <p className="zoom-infos__pegi">13+</p>
            <p className="zoom-infos__duration">1h 43m</p>
            <p className="zoom-infos__hd">HD</p>
          </div>
          <div className="zoom-infos-genres">
            <p>Genre</p>
            <p>Genre</p>
            <p>Genre</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalShow;
