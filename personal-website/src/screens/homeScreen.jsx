import React from "react";
import Three from "../components/Three";
const HomeScreen = () => {
  return (
    <div className="HomeScreen">
      <div className="HomeScreen__half--left">
        <span className="HomeScreen__title">Hello</span>
        <span className="HomeScreen__title">I'm Merlin</span>
      </div>
      <div className="HomeScreen__half--right">
        <div className="HomeScreen__3d__wrap">
          <Three />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
