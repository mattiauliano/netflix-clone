import React, { useState, useEffect } from "react";
import { FaPlay } from "react-icons/fa";
import { AiOutlineLike, AiOutlineCheck } from "react-icons/ai";
import { IoMdArrowDropdown, IoMdAdd } from "react-icons/io";
import genreIds from "../../api/genres";

const HorizontalShow = ({
  showIndex,
  showUrlPath,
  showTitle,
  showGenres,
  isForAdults,
  isAMovie,
  compatibility,
  itemsToTranslateRight,
  itemsToTranslateLeft,
}) => {
  const [isHoverShowFor1s, setIsHoveFor1s] = useState(false);
  const [isHoverShow, setIsHoverShow] = useState(false);
  // Show buttons states
  const [addedToList, setAddedToList] = useState(false);
  const [isHoverReviewDelay, setIsHoverReviewDelay] = useState(false);
  const [isHoverReview, setIsHoverReview] = useState(false);

  const [isToTranslateRight, setIsToTranslateRight] = useState(false);
  const [isToTranslateLeft, setIsToTranslateLeft] = useState(false);

  useEffect(() => {
    checkIndexForTranslate();
  }, [showIndex]);

  useEffect(() => {
    const timer =
      isHoverShow &&
      setTimeout(() => {
        setIsHoveFor1s(true);
      }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [isHoverShow]);

  useEffect(() => {
    const timer =
      isHoverReview &&
      setTimeout(() => {
        setIsHoverReviewDelay(true);
      }, 700);
    return () => {
      clearTimeout(timer);
    };
  }, [isHoverReview]);

  /* Functions */

  function checkIndexForTranslate() {
    for (let i = 0; i < itemsToTranslateRight.length; i++) {
      if (itemsToTranslateRight[i] === showIndex) {
        setIsToTranslateRight(true);
      }
    }
    for (let i = 0; i < itemsToTranslateLeft.length; i++) {
      if (itemsToTranslateLeft[i] === showIndex) {
        setIsToTranslateLeft(true);
      }
    }
  }

  /* States */

  function handleMouseEnter() {
    setIsHoverShow(true);
  }

  function handleMouseLeave() {
    setIsHoverShow(false);
    setIsHoveFor1s(false);
  }

  function handleAddedToList() {
    setAddedToList(!addedToList);
  }

  function handleMouseEnterReview() {
    setIsHoverReview(true);
  }

  function handleMouseLeaveReview() {
    setIsHoverReview(false);
    setIsHoverReviewDelay(false);
  }

  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  return (
    <div
      className={`horizontal-show-container ${
        isToTranslateRight && isHoverShow ? "translate-to-right" : null
      } ${isToTranslateLeft && isHoverShow ? "translate-to-left" : null}`}
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
          <button id="zoom-buttons__play">
            <FaPlay size={"10px"} />
          </button>
          <button className="zoom-buttons__add" onClick={handleAddedToList}>
            {addedToList ? (
              <AiOutlineCheck size={"12px"} />
            ) : (
              <IoMdAdd size={"12px"} />
            )}
          </button>
          <div
            className="review-buttons"
            style={
              isHoverReviewDelay
                ? {
                    backgroundColor: "#232323",
                    position: "absolute",
                    left: "38px",
                    gap: "0.2rem",
                    borderTopRightRadius: "15px",
                    borderTopLeftRadius: "15px",
                    borderBottomRightRadius: "15px",
                    borderBottomLeftRadius: "15px",
                    width: "6rem",
                  }
                : null
            }
            onMouseEnter={handleMouseEnterReview}
            onMouseLeave={handleMouseLeaveReview}
          >
            <button
              className="hover-button"
              style={{
                display: `${isHoverReviewDelay ? "flex" : "none"}`,
              }}
            >
              <AiOutlineLike
                size={"14px"}
                className="review-buttons__dislike"
              />
            </button>
            <button
              className={`${isHoverReviewDelay ? "hover-button" : null}`}
              style={
                isHoverReviewDelay
                  ? null
                  : { border: "2px solid rgba(201, 201, 201, 0.652)" }
              }
            >
              <AiOutlineLike size={isHoverReviewDelay ? "14px" : "12px"} />
            </button>
            <button
              className="hover-button review-buttons__top"
              style={{
                display: `${isHoverReviewDelay ? "flex" : "none"}`,
              }}
            >
              <AiOutlineLike size={"14px"} /> <AiOutlineLike size={"14px"} />
            </button>
          </div>
          <button className="zoom-buttons__show-more">
            <IoMdArrowDropdown />
          </button>
        </div>
        <div className="zoom-infos">
          <div className="zoom-infos-generals">
            <p className="zoom-infos__compatibility">{compatibility}% Match</p>
            <p className="zoom-infos__pegi">{`${
              isForAdults ? "18+" : "13+"
            }`}</p>
            <p className="zoom-infos__duration">{`${
              isAMovie ? "1h 43m" : "16 Episodes"
            }`}</p>
            <p className="zoom-infos__hd">HD</p>
          </div>
          <div className="zoom-infos-genres">
            <p>{genreIds[showGenres[0]]}</p>
            {showGenres[1] && <div className="genres-dot"></div>}
            <p>{genreIds[showGenres[1]]}</p>
            {showGenres[2] && <div className="genres-dot"></div>}
            <p>{genreIds[showGenres[2]]}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalShow;
