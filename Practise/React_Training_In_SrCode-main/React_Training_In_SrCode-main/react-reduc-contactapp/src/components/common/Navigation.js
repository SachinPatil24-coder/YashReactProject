import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <React.Fragment>
      <a className="active item">Home</a>
      <div className="right menu">
        <Link to="/contacts" className="ui item">
          Contact List
        </Link>
        &nbsp;&nbsp;&nbsp;
        <button className="ui inverted violet button small">Logout</button>
      </div>
    </React.Fragment>
  );
};

export default Navigation;
