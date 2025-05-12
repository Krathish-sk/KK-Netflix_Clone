import React, { useRef, useEffect } from "react";

import "./Navbar.css";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search_icon.svg";
import bell_icon from "../../assets/bell_icon.svg";
import profile_img from "../../assets/profile_img.png";
import caret_icon from "../../assets/caret_icon.svg";
import { logOut } from "../../firebase";

const Navbar = () => {
  const navRef = useRef();

  const leftList = [
    "Home",
    "TV Shows",
    "Movies",
    "New & Popular",
    "My List",
    "Browse by Languages",
  ];

  const renderLeftList = leftList.map((items, i) => {
    return <li key={i}>{items}</li>;
  });

  // To make navbar background dark on scroll
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 80) {
        navRef.current.classList.add("nav-dark");
      } else {
        navRef.current.classList.remove("nav-dark");
      }
    });
  }, []);

  return (
    <div className="navbar" ref={navRef}>
      <div className="navbar-left">
        <img src={logo} alt="Logo" />
        <ul>{renderLeftList}</ul>
      </div>
      <div className="navbar-right">
        <img src={search_icon} alt="Search Icon" className="icons" />
        <p>Children</p>
        <img src={bell_icon} alt="Bell Icon" className="icons" />
        <div className="navbar-profile">
          <img src={profile_img} alt="Profile Image" className="profile" />
          <img src={caret_icon} alt="Dropdown Icon" />
          <div className="dropdown">
            <p onClick={logOut}>Sign Out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
