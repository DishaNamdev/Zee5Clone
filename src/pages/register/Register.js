import React from 'react'
import "../login/login.css";
import { Link } from "react-router-dom";
function Register() {
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

          <button className="submit-btn-login">SignUp</button>
          <div className="otheroptions">
            <Link to={"/login"}><p className="signup">SignIn</p></Link> 
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
