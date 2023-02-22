import React from "react";

const VerticalShow = ({ showIndex, showUrlPath, showTitle }) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";

  return (
    <div className="vertical-image-container">
      <div className={`position ${showIndex + 1 > 9 ? "double-digit" : null}`}>
        {showIndex + 1}
      </div>
      <img
        src={`${BASE_URL}${showUrlPath}`}
        className="vertical-image-preview"
        alt={showTitle}
      />
    </div>
  );
};

export default VerticalShow;
