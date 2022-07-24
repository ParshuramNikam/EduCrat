import React from "react";
import DefaultNavbar from "../navbar/defaultNavbar/DefaultNavbar";
import TutorNavbar from "../navbar/tutorNavbar/TutorNavbar";
import TuteeNavbar from "../navbar/tuteeNavbar/TuteeNavbar";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../Home/footer/Footer";

const PageLayout = ({ navbarType, hideFooter }) => {
  return (
    <>
      <Navbar navbarType={navbarType} />
      <Outlet />
      {!hideFooter && <Footer />}
    </>
  );
};

export default PageLayout;
