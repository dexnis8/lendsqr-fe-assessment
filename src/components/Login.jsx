import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const Navigate = useNavigate();
  const [showPwd, setShowPwd] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    Navigate("/dashboard");
  };
  return (
    <div>
      <div className="login-cont">
        <div className="login-logo-img">
          <div className="logo">
            <img src="/images/logo.svg" alt="logo" />
          </div>
          <div className="login-img">
            <img src="/images/pablo-sign-in 1.svg" alt="login-img" />
          </div>
        </div>
        <div className="form-container">
          <div className="form-header">
            <h2>Welcome!</h2>
            <span>Enter details to login.</span>
          </div>
          <div className="form">
            <form action="/" onSubmit={handleSubmit} autoComplete={false}>
              <div className="input-container">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="input-container">
                <input
                  type={showPwd ? "text" : "password"}
                  name="Password"
                  id="pwd"
                  placeholder="Password"
                />
                <p
                  className="show"
                  onClick={() =>
                    showPwd ? setShowPwd(false) : setShowPwd(true)
                  }
                >
                  {!showPwd ? "show" : "Hide"}
                </p>
              </div>
              <a href="#" className="forgetPwd">
                Forgot Password?
              </a>
              <button type="submit">Log In</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
