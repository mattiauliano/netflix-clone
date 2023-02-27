import React, { useState, useEffect } from "react";
import Slider from "./Slider/Slider";
import axios from "../../api/axios";
import { IoIosArrowForward } from "react-icons/io";

const ApiRow = ({ category, fetchUrl, areVerticalImages = false }) => {
  const [sliderIndex, setSliderIndex] = useState(0);
  // List of shows to render
  const [shows, setShows] = useState([]);
  // Index bar items properties to get the correct number of divs
  const [itemsPerScreen, setItemsPerScreen] = useState(0);
  const [progressBarItemCount, setProgressBarItemCount] = useState(0);

  const [isHoverSlider, setIsHoverSlider] = useState(false);

  /* TODO - Refactor with a non-hardcoded method */
  const itemsToTranslateRight = [0, 5, 10, 15];
  const itemsToTranslateLeft = [4, 9, 14, 19];

  // Get Banners every time fetchUrl gets updated
  useEffect(() => {
    // Fetch data using the fetchUrl prop
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setShows(
        !areVerticalImages
          ? request.data.results
          : request.data.results.slice(0, 10)
      );
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  useEffect(() => {
    function updateBarItems() {
      setItemsPerScreen(
        parseInt(
          getComputedStyle(document.documentElement).getPropertyValue(
            "--items-per-screen"
          )
        )
      );
      const itemCount = shows.length;
      setProgressBarItemCount(Math.ceil(itemCount / itemsPerScreen));
    }

    updateBarItems();

    window.addEventListener("resize", updateBarItems);

    return () => {
      window.removeEventListener("resize", updateBarItems);
    };
  }, [isHoverSlider]);

  // Create barItemsArr to map a div times progressBarItemsCount value
  let barItemsArr = [];
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

  return (
    <div className="api-row-container">
      <div className="category-index-bar">
        <div>
          <h2 className="category">{category}</h2>
          {areVerticalImages ? null : (
            <>
              <div className="category-explore-all">Explore All</div>
              <IoIosArrowForward className="category-blue-arrow" />
            </>
          )}
        </div>
        <div
          className="index-bar"
          style={isHoverSlider ? { opacity: "1" } : null}
        >
          {barItems}
        </div>
      </div>
      <Slider
        sliderIndex={sliderIndex}
        setSliderIndex={setSliderIndex}
        setIsHoverSlider={setIsHoverSlider}
        itemsPerScreen={itemsPerScreen}
        progressBarItemCount={progressBarItemCount}
        shows={shows}
        areVerticalImages={areVerticalImages}
        itemsToTranslateRight={itemsToTranslateRight}
        itemsToTranslateLeft={itemsToTranslateLeft}
      />
    </div>
  );
};

export default ApiRow;
