import React from "react";
import "./login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="container">
      <div className="login-container">
        <form className="form-control" action="submit">
          <div className="username-div">
            <label htmlFor="username" className="username-lbl">
              Username
            </label>
            <input type="text" className="username-in" />
          </div>

          <div className="password-div">
            <label htmlFor="password" className="password-lbl">
              Password
            </label>
            <input type="text" className="password-in" />
          </div>

          <button className="submit-btn-login">Login</button>
          <div className="otheroptions">
            <p className="forgot-password">Forgot Password?</p>
            <Link className="signup" to={"/register"}><p className="signup">SignUp</p></Link> 
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
