import React, { useState, useEffect } from "react";
import axios from "../api/axios";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const ApiRow = ({ category, fetchUrl, areVerticalImages = false }) => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const [shows, setShows] = useState([]);

  const BASE_URL = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    // Fetch data using the fetchUrl prop
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setShows(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  // Change style based on
  const showsElements = shows.map((show) => {
    const showIndex = shows.indexOf(show);
    return areVerticalImages ? (
      <div className="vertical-image-container">
        <div
          className={`position ${showIndex + 1 > 9 ? "double-digit" : null}`}
        >
          {showIndex + 1}
        </div>
        <img
          src={`${BASE_URL}${show.poster_path}`}
          key={show.id}
          className="vertical-image-preview"
          alt={show.title}
        />
      </div>
    ) : (
      <img
        src={`${BASE_URL}${show.backdrop_path}`}
        key={show.id}
        className="image-preview"
        alt={show.title}
      />
    );
  });

  // Get items amount
  const itemCount = shows.length;
  // Get itemsPerScreen dynamically from css property
  const itemsPerScreen = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue(
      "--items-per-screen"
    )
  );

  // Create progressBar divs based on items amount
  let barItemsArr = [];
  const progressBarItemCount = Math.ceil(itemCount / itemsPerScreen);
  for (let i = 0; i < progressBarItemCount; i++) {
    barItemsArr.push(i);
  }
  const barItems = barItemsArr.map((item) => (
    <div
      key={barItemsArr.indexOf(item)}
      className={`bar-item ${
        sliderIndex === barItemsArr.indexOf(item) ? "active" : null
      }`}
    ></div>
  ));

  function handleBackClick() {
    if (sliderIndex - 1 < 0) {
      setSliderIndex(progressBarItemCount - 1);
    } else {
      setSliderIndex((prevIndex) => prevIndex - 1);
    }
  }

  function handleForwardClick() {
    if (sliderIndex + 1 >= progressBarItemCount) {
      setSliderIndex(0);
    } else {
      setSliderIndex((prevIndex) => prevIndex + 1);
    }
  }

  return (
    <div className="api-row-container">
      <div className="category-index-bar">
        <h2 className="fs-800">{category}</h2>
        <div className="index-bar">{barItems}</div>
      </div>
      <div className="slider-container">
        <div className="left-handle handle" onClick={handleBackClick}>
          <IoIosArrowBack size={"3rem"} className="handle-slider" />
        </div>
        <div
          style={{
            transform: `translateX(calc(${sliderIndex} * -100%))`,
          }}
          className="api-row-slider"
          id="api-row-slider"
        >
          {showsElements}
        </div>
        <div className="right-handle handle" onClick={handleForwardClick}>
          <IoIosArrowForward size={"3rem"} className="handle-slider" />
        </div>
      </div>
    </div>
  );
};

export default ApiRow;
