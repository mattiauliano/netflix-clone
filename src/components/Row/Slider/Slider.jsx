import React, { useState } from "react";
import VerticalShow from "../../Cards/VerticalShow";
import HorizontalShow from "../../Cards/HorizontalShow";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Slider = ({
  sliderIndex,
  setSliderIndex,
  setIsHoverSlider,
  progressBarItemCount,
  shows,
  areVerticalImages,
  itemsToTranslateRight,
  itemsToTranslateLeft,
  itemsPerScreen,
}) => {
  const [isNextClicked, setIsNextClicked] = useState(false);

  function displayCard(showsToMapThrough) {
    const mappedShows = showsToMapThrough.map((show) => {
      const showIndex = shows.indexOf(show);
      return areVerticalImages ? (
        <VerticalShow
          showIndex={showIndex}
          showUrlPath={show.poster_path}
          key={show.id}
          showTitle={show.title}
        />
      ) : (
        <HorizontalShow
          showIndex={showIndex}
          showUrlPath={show.backdrop_path}
          key={show.id}
          showTitle={show.title}
          showGenres={show.genre_ids}
          isForAdults={show.adult}
          isAMovie={show.media_type === "movie"}
          compatibility={Math.floor(Math.random() * (100 - 60 + 1) + 60)}
          itemsToTranslateRight={itemsToTranslateRight}
          itemsToTranslateLeft={itemsToTranslateLeft}
          itemsPerScreen={itemsPerScreen}
        />
      );
    });
    return mappedShows;
  }

  /* Handler */
  function handleBackClick() {
    if (sliderIndex - 1 < 0) {
      setSliderIndex(progressBarItemCount - 1);
    } else {
      setSliderIndex((prevIndex) => prevIndex - 1);
    }
  }

  function handleForwardClick() {
    setIsNextClicked(true);

    if (sliderIndex + 1 >= progressBarItemCount) {
      setSliderIndex(0);
    } else {
      setSliderIndex((prevIndex) => prevIndex + 1);
    }
  }

  function handleMouseEnter() {
    setIsHoverSlider(true);
  }

  function handleMouseLeave() {
    setIsHoverSlider(false);
  }

  return (
    <div
      className="slider-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="left-handle handle"
        onClick={handleBackClick}
        style={isNextClicked ? { opacity: "1" } : null}
      >
        <IoIosArrowBack size={"3rem"} className="handle-slider" />
      </div>
      <div
        style={{
          transform: `translateX(calc(${sliderIndex} * -100%))`,
        }}
        className="api-row-slider"
        id="api-row-slider"
      >
        {/* Render each Banner from shows request */}
        {displayCard(shows)}
      </div>
      <div className="right-handle handle" onClick={handleForwardClick}>
        <IoIosArrowForward size={"3rem"} className="handle-slider" />
      </div>
    </div>
  );
};

export default Slider;
