import React from "react";
import Three from "../components/Three";
const HomeScreen = () => {
  return (
    <div className="HomeScreen">
      <span className="HomeScreen__title">Hello</span>

      <div className="HomeScreen__3d__wrap">
        <Three />
      </div>
    </div>
  );
};

export default HomeScreen;
