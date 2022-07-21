import React from "react";
import "./SignupPage.css";
import { useState } from "react"; 
import {Link} from "react-router-dom";

const SignupPage = () => {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    function signupHandler() {
        alert('signup');
      }

  return (
    <>
    <div className="content-wrapper">
      <div className="content">
        <div className="signup-wrapper shadow-box">
          <div className="company-details ">
            <div className="shadow"></div>
            <div className="wrapper-1">
              <div className="logo">
                <div className="icon-food"></div>
              </div>
              <h1 className="title">EduCrat</h1>
              <div className="slogan">The Learing Platform</div>
            </div>
          </div>
          <div className="signup-form ">
            <div className="wrapper-2">
              <div className="form-title">WELCOME</div>
              <div className="form">
                <form>

                <div className="content-item">
                    <label>Username</label>
                    <input
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      value={name}
                      type="text"
                      placeholder="Jhon_Doe"
                      name="Username"
                      required
                    />
                  </div>

                  <div className="content-item">
                    <label>Email</label>
                    <input
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      value={email}
                      type="text"
                      placeholder="youremail@gmail.com"
                      name="email"
                      required
                    />
                  </div>

                  <div className="content-item">
                    <label>
                      Password
                      <input
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                        value={password}
                        type="password"
                        placeholder="**********"
                        name="psw"
                        required
                      />
                    </label>
                  </div>

                  <button
                    onClick={signupHandler}
                    type="button"
                    className="signup"
                  >
                    signup
                  </button>
                  <br></br>
                  <div className="create">Already have an account ?&nbsp;
                    <Link className="signup_link" to="/login">Log In</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default SignupPage;
