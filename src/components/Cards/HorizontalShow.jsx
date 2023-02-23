import React, { useState, useEffect } from "react";
import { FaPlay } from "react-icons/fa";
import { AiOutlineLike, AiOutlineCheck } from "react-icons/ai";
import { IoMdArrowDropdown, IoMdAdd } from "react-icons/io";

const HorizontalShow = ({ showUrlPath, showTitle }) => {
  const [isHoverShowFor1s, setIsHoveFor1s] = useState(false);
  const [isHoverShow, setIsHoverShow] = useState(false);
  // Show buttons states
  const [addedToList, setAddedToList] = useState(false);
  const [isHoverReviewDelay, setIsHoverReviewDelay] = useState(false);
  const [isHoverReview, setIsHoverReview] = useState(false);

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

  function handleMouseEnterLike() {
    setIsHoverLike(true);
  }

  function handleMouseLeaveLike() {
    setIsHoverLike(false);
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
          <button id="zoom-buttons__play">
            <FaPlay size={"10px"} />
          </button>
          <button onClick={handleAddedToList}>
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
              onMouseEnter={handleMouseEnterLike}
              onMouseLeave={handleMouseLeaveLike}
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
