import React from "react";
import { Link } from "react-router-dom";
import SearchBox from "../../searchbox/SearchBox";
import "./DefaultNavbar.css";

const DefaultNavbar = () => {
  return (
    <nav className="navbar">
      <div className="left_side">
        <img src="/Images/logo/logo_icon.png" alt="" height={36} width={36} />
        <span className="name">EduCrat</span>
      </div>
      <div className="mid">
        <SearchBox />
      </div>
      <div className="right_side">
        {/* <Link to={"/signup-tutor"}>
          <span>Become a Tutor</span>
        </Link> */}

        <Link to={"/login"}>
          <span>Sign in</span>
        </Link>
        <Link to={"/signup"}>
          <button >Join</button>
        </Link>
      </div>
    </nav>
  );
};

export default DefaultNavbar;
