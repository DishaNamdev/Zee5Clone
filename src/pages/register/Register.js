import React from "react";
import "../login/login.css";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../common/firebase";

function Register() {
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
    createUserWithEmailAndPassword(auth, enteredValue.email, enteredValue.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        console.log("this is my response", res);
        const user = res.user;
        console.log(user);
        await updateProfile(user, {
          displayName: enteredValue.email,
        });

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
      <h3>Register to Zee5</h3>
      <div className="login-container">
        <form className="form-control">
        <b className="login-error">{errMssg}</b>
          <div className="username-div">
            <label htmlFor="username" className="username-lbl">
              Username
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
            className="submit-btn-login"
            disabled={submitButtonDisabled}
            onClick={handleSubmission}
          >
            SignUp
          </button>
          <div className="otheroptions">
            <div className="signup-div">
              <p>Already have an account?</p>
              <Link to={"/"}>
                <p className="signup">SignIn</p>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
