import React from "react";
import "./DashboardGig.css";
import { Link } from "react-router-dom";

const DashboardGig = () => {
  return (
    <div className="dashboard_gig_container">
      <div className=" dashboard_gig_filter_wrapper">
        <div className="dashboard_gig_main_div">
          <img
            className="gig_image"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy-HXMNg_cHoCVxLSO44oNoaDaP_9ggJEXiw&usqp=CAU"
            alt=""
          />
        </div>
        <div className="studend_avatar_container">
          <div>
            <img
              className="student_avatar"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=600&q=60"
              alt=""
            />
          </div>
          <div className="student_online_status"></div>
        </div>
        <div className="student_name">parshu_nikam</div>
        <div className="course_price_wrapper">
          <div className="course_title">Price</div>
          <div className="course_amount">$100</div>
        </div>
        <div>
          <div className="due_data_wrapper">Due In</div>
          <div className="clock_img_wrapper">
            <div className="clock_image">
              <svg
                viewBox="0 0 64 64"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
                enableBackground="new 0 0 64 64"
              >
                <path
                  d="M-346.1-373.1c-12.6 0-22.9-10.3-22.9-22.9 0-12.6 10.3-22.9 22.9-22.9 12.6 0 22.9 10.3 22.9 22.9.1 12.6-10.2 22.9-22.9 22.9zm0-43.4c-11.3 0-20.4 9.2-20.4 20.4s9.2 20.4 20.4 20.4 20.4-9.2 20.4-20.4-9.1-20.4-20.4-20.4z"
                  transform="translate(378 428)"
                  fill="#000000"
                  class="fill-134563"
                ></path>
                <path
                  d="m-338.9-384.3-8.5-8.5v-15.5h2.7v14.4l7.7 7.7-1.9 1.9"
                  transform="translate(378 428)"
                  fill="#000000"
                  class="fill-134563"
                ></path>
              </svg>
            </div>
            <span className="deadline">30d,8h</span>
          </div>
        </div>
        <div className="course-status_wrapper">
          <div className="course_status">Status</div>
          <div className="course_progress_bar">IN PROGRESS</div>
        </div>
        <Link className="view_button" to={"/tutor_dashboard"}>
          <button>View</button>
        </Link>
      </div>
    </div>
  );
};

export default DashboardGig;
