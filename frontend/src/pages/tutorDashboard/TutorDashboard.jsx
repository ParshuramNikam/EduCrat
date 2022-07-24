import React from "react";
import DashboadMiniChatBox from "../../components/tutorDashboard/leftSIde/DashboadMiniChatBox/DashboadMiniChatBox";
import ProfileProgressWrapper from "../../components/tutorDashboard/leftSIde/profileProgressWrapper/ProfileProgressWrapper";
import OrderStatus from "../../components/tutorDashboard/rightSide/orderStatus/OrderStatus";
import "./TutorDashboard.css";

const TutorDashboard = () => {
  return (
    <div className="tutor_dashboard_page">

      <div className="dashboard_container page_container">

        <div className="left_side">

          <ProfileProgressWrapper />
          <DashboadMiniChatBox />

        </div>

        <div className="right_side">
          <OrderStatus />
        </div>

      </div>

    </div >
  );
};

export default TutorDashboard;
