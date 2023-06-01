import React from "react";
import "./login.css";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../common/firebase";

function Login() {
  const history = useHistory();
  const [enteredValue, setEnteredValue] = useState({
    email: "",
    pass: "",
  });

  const [errMssg, setErrMssg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!enteredValue.email || !enteredValue.pass) {
      setErrMssg("Please! Fill all the fields..");
      return;
    }
    setErrMssg("");

    setSubmitButtonDisabled(true);
    // creating the user with email and password in firebase
    signInWithEmailAndPassword(auth, enteredValue.email, enteredValue.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);

        history.push("/home");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrMssg(err.message);
        console.log("Error ", err.message);
      });

    console.log(enteredValue);
  };

  return (
    <div className="container">
      <h3>Login to Zee5</h3>
      <div className="login-container">
        <form className="form-control">
          <b className="login-error">{errMssg}</b>
          <div className="username-div">
            <label htmlFor="username" className="username-lbl">
              Email
            </label>
            <input
              type="text"
              className="username-in"
              onChange={(event) =>
                setEnteredValue((prev) => ({
                  ...prev,
                  email: event.target.value,
                }))
              }
            />
          </div>

          <div className="password-div">
            <label htmlFor="password" className="password-lbl">
              Password
            </label>
            <input
              type="text"
              className="password-in"
              onChange={(event) =>
                setEnteredValue((prev) => ({
                  ...prev,
                  pass: event.target.value,
                }))
              }
            />
          </div>

          <button
            disabled={submitButtonDisabled}
            className="submit-btn-login"
            onClick={handleSubmission}
          >
            Login
          </button>

          <div className="otheroptions">
            <div className="signup-div">
              <p>Create New Account?</p>
              <Link className="signup" to={"/register"}>
                <p className="signup">SignUp</p>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
