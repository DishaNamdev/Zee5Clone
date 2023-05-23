import React from "react";
import "./login.css";

function Login() {
  return (
   <>
      <div className="topbar">
        <h3>Zee5</h3>
      </div>
    <div className="login-container">
      
      <div className="login-content">
        {/* <h3>Login</h3> */}
        <form action="submit">
          <div className="input-fields">
            <label htmlFor="uname-input" className="uname-label">
              Username
            </label>
            <input type="text" className="uname-input" />
          </div>

          <div className="input-fields">
            <label htmlFor="psswrd-input" className="psswrd-label">
              Password
            </label>
            <input type="text" className="psswrd-input" />
          </div>

          <button className="submit-btn">Sign In</button>
        </form>
      </div>
    </div>
   </>

  );
}

export default Login;
