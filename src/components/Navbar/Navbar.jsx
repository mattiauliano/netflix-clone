import React, { useState, useEffect, useRef } from "react";
import NotificationsPanel from "./NotificationsPanel/NotificationsPanel";
import ProfileMenu from "./ProfileMenu/ProfileMenu";

import { GoSearch } from "react-icons/go";
import { BiBell } from "react-icons/bi";
import { IoMdArrowDropdown } from "react-icons/io";

import logo from "../../assets/text-logo.svg";
import avatar from "../../assets/avatar.png";

const Navbar = ({ windowWidth }) => {
  const [navbarBg, setNavbarBg] = useState(false);
  const [search, setSearch] = useState(false);
  // Bell States
  const [isHoverBell, setIsHoverBell] = useState(false);
  const [isHoverPanel, setIsHoverPanel] = useState(false);
  // Profile
  const [isHoverProfileSection, setIsHoverProfileSection] = useState(false);
  const [isHoverProfileMenu, setIsHoverProfileMenu] = useState(false);
  // Use ref to select an element
  const targetRef = useRef(null);
  // Display Browse Menu state
  const [displayBrowseMenu, setDisplayBrowseMenu] = useState(false);

  useEffect(() => {
    if (windowWidth > 900) {
      setDisplayBrowseMenu(false);
    }
  }, [windowWidth]);

  // Change background color on scroll
  function changeBackground() {
    window.scrollY >= 100 ? setNavbarBg(true) : setNavbarBg(false);
  }

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  // Set search to false on document event click
  function useOutsideSearchSetter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setSearch(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  useOutsideSearchSetter(targetRef);

  useEffect(() => {
    if (isHoverBell || isHoverPanel) {
      setIsHoverProfileMenu(false);
      setIsHoverProfileSection(false);
    } else if (isHoverProfileMenu || isHoverProfileSection) {
      setIsHoverBell(false);
      setIsHoverPanel(false);
    }
  }, [isHoverBell, isHoverPanel, isHoverProfileMenu, isHoverProfileSection]);

  /* Handlers */

  function handleSearchIcon() {
    setSearch((prevSearchState) => !prevSearchState);
  }

  function handleMouseEnter(e) {
    if (e.target.id === "bell") {
      setIsHoverBell(true);
    } else if (e.target.id === "profile-section") {
      setIsHoverProfileSection(true);
    }
  }

  function handleMouseLeave(e) {
    // Update the correct state based on element
    if (e.target.id === "bell") {
      // If isHoverPanel use it to handle isHoverBell
      if (isHoverPanel) {
        return;
      } else {
        setTimeout(() => {
          setIsHoverBell(false);
        }, 80);
      }
    } else if (e.target.id === "profile-section") {
      // If isHoverProfileMenu use it to handle isHoverProfileSection
      if (isHoverProfileMenu) {
        return;
      } else {
        setTimeout(() => {
          setIsHoverProfileSection(false);
        }, 80);
      }
    }
  }

  function handleDropDownMenu() {
    setDisplayBrowseMenu((prevState) => !prevState);
  }

  return (
    <div className={navbarBg ? "navbar active" : "navbar"}>
      <img src={logo} alt="" className="logo" />
      <nav className="main-nav">
        <ul role="list" className="fs-200">
          <li>
            <a className="actual-page" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="navbar-link" href="/">
              TV Shows
            </a>
          </li>
          <li>
            <a className="navbar-link" href="/">
              Movies
            </a>
          </li>
          <li>
            <a className="navbar-link" href="/">
              New & Popular
            </a>
          </li>
          <li>
            <a className="navbar-link" href="/">
              My List
            </a>
          </li>
          <li>
            <a className="navbar-link" href="/">
              Browse by Languages
            </a>
          </li>
        </ul>
        <div className="dropdown-menu" onClick={handleDropDownMenu}>
          <p>Browse</p>
          <IoMdArrowDropdown size="1.2rem" />
        </div>
      </nav>
      <div
        className="grey-arrow-decoration"
        id="mobile-navbar-arrow"
        style={
          displayBrowseMenu
            ? {
                display: "block",
              }
            : null
        }
      ></div>
      <nav
        className="mobile-navbar"
        style={
          displayBrowseMenu
            ? {
                display: "block",
              }
            : null
        }
      >
        <ul role="list" className="fs-200">
          <li>
            <a className="actual-page" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="navbar-link" href="/">
              TV Shows
            </a>
          </li>
          <li>
            <a className="navbar-link" href="/">
              Movies
            </a>
          </li>
          <li>
            <a className="navbar-link" href="/">
              New & Popular
            </a>
          </li>
          <li>
            <a className="navbar-link" href="/">
              My List
            </a>
          </li>
          <li>
            <a className="navbar-link" href="/">
              Browse by Languages
            </a>
          </li>
        </ul>
      </nav>
      <div className="right-navbar">
        <div
          ref={targetRef}
          className="search-bar"
          style={
            search
              ? {
                  width: "16rem",
                  height: "2rem",
                  backgroundColor: "hsla(0, 0%, 0%, 0.750)",
                  border: "1px solid white",
                  display: "flex",
                  justifyContent: "flex-start",
                  padding: "2px 4px",
                  animation: "reveal 0.30s forwards",
                }
              : null
          }
        >
          <GoSearch
            className="search-icon"
            size="1.3rem"
            onClick={handleSearchIcon}
          />
          <input
            type="text"
            name="search-bar-input"
            id="search-bar-input"
            placeholder="Titles, people, genres"
            style={
              search
                ? {
                    display: "inline",
                  }
                : null
            }
          />
        </div>
        <a className="navbar-link fs-200" href="/">
          Kids
        </a>
        <BiBell
          className="bell"
          id="bell"
          size="1.4rem"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <NotificationsPanel
          isHoverBell={isHoverBell}
          setIsHoverBell={setIsHoverBell}
          isHoverPanel={isHoverPanel}
          setIsHoverPanel={setIsHoverPanel}
        />
        <div
          className="arrow-panel grey-arrow-decoration"
          style={isHoverBell || isHoverPanel ? { display: "block" } : null}
        ></div>
        <ProfileMenu
          isHoverProfileSection={isHoverProfileSection}
          setIsHoverProfileSection={setIsHoverProfileSection}
          isHoverProfileMenu={isHoverProfileMenu}
          setIsHoverProfileMenu={setIsHoverProfileMenu}
        />
        <div
          className="arrow-profile-menu grey-arrow-decoration"
          style={
            isHoverProfileSection || isHoverProfileMenu
              ? { display: "block" }
              : null
          }
        ></div>
        <div
          className="avatar-arrow-container"
          id="profile-section"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img src={avatar} alt="Your avatar picture" className="avatar" />
          <IoMdArrowDropdown
            size="1.2rem"
            className={`dropdown-arrow ${
              isHoverProfileSection || isHoverProfileMenu
                ? "rotate-dropdown-arrow"
                : null
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
