import React from "react";
import { Link } from "react-router-dom";
import "./TutorNavbar.css";

const TutorNavbar = () => {
  return (
    <nav className="navbar">
      <div className="left_side">
        <img src="/Images/logo/logo_icon.png" alt="" height={36} width={36} />
        <span className="name">EduCrat</span>
        <div className="elemets_div">
          <Link to={"/"}>
            <span>Dashboard</span>
          </Link>
          <Link to={"/"}>
            <span>Messages</span>
          </Link>
          <Link to={"/"}>
            <span>Orders</span>
          </Link>
          <Link to={"/"}>
            <span>Gigs</span>
          </Link>
          <Link to={"/"}>
            <span>Earnings</span>
          </Link>
        </div>
      </div>
      <div className="right_side">
        <Link to={"/dashboard"}>
          <span>Switch to Tutee</span>
        </Link>
        <Link to={"/signup"}>
          {/* <button>Join</button> */}
          <div className="avatar_wrapper">
            <img
              className="avatar_img"
              alt=""
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
            />
            <div className="online"></div>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default TutorNavbar;
