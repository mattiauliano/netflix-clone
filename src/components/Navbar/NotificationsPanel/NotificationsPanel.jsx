import React from "react";
import Notification from "./Notification/Notification";

import junge from "../../../assets/junge.jpg";
import junjiIto from "../../../assets/junji-ito-macabre.webp";
import paleBlueEye from "../../../assets/pale-blue-eye.jpg";
import alice from "../../../assets/alice-in-borderland.jpeg";

const NotificationsPanel = ({
  isHoverBell,
  setIsHoverBell,
  isHoverPanel,
  setIsHoverPanel,
}) => {
  function handleMouseEnterPanel() {
    setIsHoverPanel(true);
  }

  function handleMouseLeavePanel() {
    setIsHoverPanel(false);
    setIsHoverBell(false);
  }
  return (
    <div
      className="notifications-panel"
      onMouseEnter={handleMouseEnterPanel}
      onMouseLeave={handleMouseLeavePanel}
      style={isHoverBell || isHoverPanel ? { display: "flex" } : null}
    >
      <Notification
        prefix="New Arrival"
        show="JUNG_E"
        timeAgo="3 weeks ago"
        imgUrl={junge}
      />
      <Notification
        prefix="New Arrival"
        show="Junji Ito Maniac: Japanese Tales of the Macabre"
        timeAgo="1 month ago"
        imgUrl={junjiIto}
      />
      <Notification
        prefix="New Arrival"
        show="The Pale Blue Eye"
        timeAgo="1 month ago"
        imgUrl={paleBlueEye}
      />
      <Notification
        prefix="Now Available"
        show="Alice In Borderland 2"
        timeAgo="2 months ago"
        imgUrl={alice}
      />
    </div>
  );
};

export default NotificationsPanel;
