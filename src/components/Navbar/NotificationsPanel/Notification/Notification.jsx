import React from "react";

const Notification = ({ prefix, show, timeAgo, imgUrl }) => {
  return (
    <div className="notification">
      <div
        className="notification-image"
        style={{ backgroundImage: `url(${imgUrl})` }}
      ></div>
      <div className="notification-description">
        <h2>{prefix}</h2>
        <h2 className="notification-show">{show}</h2>
        <p className="notification-time-ago">{timeAgo}</p>
      </div>
    </div>
  );
};

export default Notification;
