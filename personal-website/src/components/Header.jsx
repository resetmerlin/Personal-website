import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <Link to="/" className="header__logo ">
          <img src="../public/image/logo-white.png" alt="logo"></img>
        </Link>
      </div>

      <div className="header__center">
        <Link to="/">HOME</Link>

        <Link to="/works">WORK</Link>
        <Link to="/about">ABOUT ME</Link>

        <Link to="/blog">BLOG</Link>
      </div>

      <div className="header__right">
        <Link to="/contact" className="header__right">
          CONTACT
        </Link>
      </div>
    </div>
  );
};

export default Header;
