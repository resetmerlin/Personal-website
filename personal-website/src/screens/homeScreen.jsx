import React from "react";
import Three from "../components/Three";
import { Link } from "react-router-dom";
const HomeScreen = () => {
  return (
    <div className="HomeScreen__content">
      <div className="HomeScreen__content__wrap">
        <span className="HomeScreen__title">Hi this is Merlin</span>
        <span className="HomeScreen__side-title">
          I'm a Front-end web developer
        </span>
        <p className="HomeScreen__description">
          'This is my personal website. You can see my works, blog and
          information about me. You can contact me by using email. I will
          provide you my email address on contact page.'
        </p>
        <p className="HomeScreen__description">Click to see more of me!</p>
        <div className="HomeScreen__btns__wrap">
          <button className="HomeScreen__btn">About me</button>
          <div className="HomeScreen__link-btn">
            <Link to="https://github.com/resetmerlin?tab=repositories">
              <img src="../public/image/github.png" alt="github-btn" />
            </Link>
          </div>
          <div className="HomeScreen__link-btn">
            <Link to="https://publish.obsidian.md/resetmerlin">
              <img src="../public/image/obsidian.png" alt="obsidian-btn" />
            </Link>
          </div>
        </div>
      </div>
      <div className="HomeScreen__content__wrap">
        <div className="HomeScreen__profile">
          <img src="public/image/profile.png" alt="profileImage" />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
