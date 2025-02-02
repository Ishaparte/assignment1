import React from "react";
import "../styles/login.css";

const Register = () => {
  return (
    <div className="login-container">
      <div className="login-form-container">
        <div className="login-form">
          <h2 className="login-title">Create a New Account</h2>
          <p className="login-subtitle">Enter your Account</p>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter email" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter password" />
          </div>
          <button className="login-btn">Register</button>
          <p className="or-text">or</p>
          <button className="google-signin">Sign in with Google</button>
          <button className="apple-signin">Sign in with Apple</button>
        </div>
      </div>
      <div className="login-image-container">
        <div className="login-overlay">
          <h2 className="new-here">New Here?</h2>
          <p>Sign up & register to great new opportunities</p>
          <button className="signup-btn">Explore More</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
