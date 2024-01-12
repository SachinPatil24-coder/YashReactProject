import React from "react";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <div className="ui inverted  menu">
      <div className="ui container">
        <div className="header item">
          <h3>CMS</h3>
        </div>{" "}
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Navigation />
      </div>
    </div>
  );
};

export default Header;
