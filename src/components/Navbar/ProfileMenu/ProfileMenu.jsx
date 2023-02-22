import React from "react";
import avatar from "../../../assets/avatar.png";
import kids from "../../../assets/netflix-kids.png";

import { HiPencil } from "react-icons/hi";
import { AiOutlineUserSwitch, AiOutlineUser } from "react-icons/ai";
import { TbHelp } from "react-icons/tb";

const ProfileMenu = ({
  isHoverProfileSection,
  setIsHoverProfileSection,
  isHoverProfileMenu,
  setIsHoverProfileMenu,
}) => {
  function handleMouseEnterProfileMenu() {
    setIsHoverProfileMenu(true);
  }

  function handleMouseLeaveProfileMenu() {
    setIsHoverProfileMenu(false);
    setIsHoverProfileSection(false);
  }
  return (
    <div
      className="profile-menu"
      onMouseEnter={handleMouseEnterProfileMenu}
      onMouseLeave={handleMouseLeaveProfileMenu}
      style={
        isHoverProfileMenu || isHoverProfileSection ? { display: "flex" } : null
      }
    >
      <div className="accounts">
        <div className="account">
          <img src={avatar} alt="Avatar" className="avatar" />
          <p>Mattia</p>
        </div>
        <div className="account">
          <img src={kids} alt="Kids" className="avatar" />
          <p>Kids</p>
        </div>
      </div>
      <div className="actions-profile-menu">
        <div className="task-profile-menu">
          <HiPencil size={"1.5rem"} />
          <p>Manage Profiles</p>
        </div>
        <div className="task-profile-menu">
          <AiOutlineUserSwitch size={"1.5rem"} />
          <p>Transfer Profile</p>
        </div>
        <div className="task-profile-menu">
          <AiOutlineUser size={"1.5rem"} />
          <p>Account</p>
        </div>
        <div className="task-profile-menu">
          <TbHelp size={"1.5rem"} />
          <p>Help Center</p>
        </div>
      </div>
      <div className="sign-out">
        <p>Sign out of Netflix</p>
      </div>
    </div>
  );
};

export default ProfileMenu;
