import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "./../firebase/firebase.init";

const auth = getAuth(app);

const LoginBootstrap = () => {
  const [success, setSuccess] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    setSuccess(false);
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setSuccess(true);
      })
      .catch((error) => {
        console.error("error", error);
      });
  };
  const handleEmailBlur = (event) => {
    const email = event.target.value;
    setUserEmail(email);
    console.log(email);
  };
  const handleForgetPassword = () => {
    if (!userEmail) {
      alert("enter your email");
      return;
    }
    sendPasswordResetEmail(auth, userEmail)
      .then(() => {
        alert("password reset email sent.Please check your email");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="w-50 mx-auto">
      <h3 className="text-success">Please Log In!!!!</h3>
      <form onSubmit={handleSubmit}>
      
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            onBlur={handleEmailBlur}
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Enter a valid email"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput2" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="Enter a password"
            required
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Log in
        </button>
      </form>
      {success && <p>Login successful</p>}
      <p>
        <small>
          New to this website? Please <Link to="/register">Register</Link>
        </small>
      </p>
      <p>
        <small>
          Forget Password?
          <button
            type="button"
            onClick={handleForgetPassword}
            className="btn btn-link"
          >
            Reset Password
          </button>
        </small>
      </p>
    </div>
  );
};

export default LoginBootstrap;
