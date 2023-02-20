import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="header__logo header__left">
        <img src="../public/image/logo-white.png" alt="logo"></img>
      </Link>
      <div className="header__center">
        <Link to="/works">WORK</Link>
        <Link to="/about">ABOUT ME</Link>

        <Link to="/blog">BLOG</Link>
      </div>
      <Link to="/contact" className="header__right">
        CONTACT
      </Link>
    </div>
  );
};

export default Header;
