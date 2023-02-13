import React, { useState, useEffect } from "react";

import { GoSearch } from "react-icons/go";
import { BiBell } from "react-icons/bi";
import { IoMdArrowDropdown } from "react-icons/io";

import logo from "../assets/text-logo.svg";
import avatar from "../assets/avatar.png";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  function changeBackground() {
    window.scrollY >= 100 ? setNavbar(true) : setNavbar(false);
  }

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <div className={navbar ? "navbar active" : "navbar"}>
      <img src={logo} alt="" className="logo" />
      <nav className="main-nav">
        <ul role="list" className="fs-200">
          <li>
            <a className="actual-page" href="#">
              Home
            </a>
          </li>
          <li>
            <a href="#">Serie TV</a>
          </li>
          <li>
            <a href="#">Film</a>
          </li>
          <li>
            <a href="#">Nuovi e popolari</a>
          </li>
          <li>
            <a href="#">La mia lista</a>
          </li>
          <li>
            <a href="#">Sfoglia per lingua</a>
          </li>
        </ul>
        <div className="dropdown-menu">
          <p>Sfoglia</p>
          <IoMdArrowDropdown size="1.2rem" />
        </div>
      </nav>
      <div className="right-navbar">
        <GoSearch className="search-icon" size="1.3rem" />
        <a className="fs-200" href="#">
          Bambini
        </a>
        <BiBell size="1.4rem" />
        <div className="avatar-arrow-container">
          <img src={avatar} alt="Your avatar picture" className="avatar" />
          <IoMdArrowDropdown size="1.2rem" className="dropdown-arrow" />
        </div>
      </div>
      {/* <Hero /> */}
    </div>
  );
};

export default Navbar;
