import React from "react";

import "./Footer.css";
import facebook_icon from "../../assets/facebook_icon.png";
import instagram_icon from "../../assets/instagram_icon.png";
import twitter_icon from "../../assets/twitter_icon.png";
import youtube_icon from "../../assets/youtube_icon.png";

const Footer = () => {
  const menuLinkTexts = [
    "Audio Description",
    "Help Center",
    "Gift Cards",
    "Media Center",
    "Investor Relations",
    "Jobs",
    "Terms of Use",
    "Privacy",
    "Legal Notices",
    "Cookies Performances",
    "Corporate Informations",
    "Contact Us",
  ];

  const renderMenuLinkTexts = menuLinkTexts.map((text, index) => {
    return <li key={index}>{text}</li>;
  });

  return (
    <div className="footer">
      <div className="footer-icons">
        <img src={facebook_icon} alt="Facebook Icon" />
        <img src={instagram_icon} alt="Instagram Icon" />
        <img src={twitter_icon} alt="Twitter Icon" />
        <img src={youtube_icon} alt="Youtube Icon" />
      </div>
      <ul>{renderMenuLinkTexts}</ul>
      <p className="copyright-text">© 2025 KK-Netflix_Clone, Inc.</p>
    </div>
  );
};

export default Footer;
