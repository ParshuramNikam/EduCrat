import React from "react";
import ProfileProgressWrapper from "../../components/tutorDashboard/leftSIde/profileProgressWrapper/ProfileProgressWrapper";
import OrderStatus from "../../components/tutorDashboard/rightSide/orderStatus/OrderStatus";
import "./TutorDashboard.css";
import DashboardGig from "../../components/tutorDashboard/rightSide/dashboardGig/DashboardGig";

const TutorDashboard = () => {
  return (
    <div className="tutor_dashboard_page">

      <div className="dashboard_container page_container">

        <div className="left_side">

          <ProfileProgressWrapper />

        </div>

        <div className="right_side">
          {/* <OrderStatus /> */}
          <div className="gig_title">Your Gigs:</div>         
          <DashboardGig />
          <DashboardGig />
          <DashboardGig />
          <DashboardGig />
        </div>

      </div>

    </div >
  );
};

export default TutorDashboard;
