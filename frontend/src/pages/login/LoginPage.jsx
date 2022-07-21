import React from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css";
import { useState } from "react";

const LoginPage = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  function loginHandler() {
    alert("login");
  }

  return (
    <>
      <div className="content-wrapper">
        <div className="content">
          <div className="login-wrapper shadow-box">
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
            <div className="login-form ">
              <div className="wrapper-2">
                <div className="form-title">Welcome to EduCrat</div>
                <div className="form">
                  <form>
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
                      onClick={loginHandler}
                      type="button"
                      className="login"
                    >
                      login
                    </button>
                    <br></br>
                    <div className="create">Don't have an account ?&nbsp;
                      <Link className="signup_link" to="/signup">Sign Up</Link>
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

export default LoginPage;
