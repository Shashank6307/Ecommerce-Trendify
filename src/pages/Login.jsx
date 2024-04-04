import React from "react";
import "../Style/Login.css";
const Login = () => {
  return (
    <div className="Login">
      <div className="container">
        <h1>Sign Up</h1>
        <div className="field">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <input type="password" placeholder="Password" />
        </div>
        <button>Continue</button>
        <p className="login">
          Already have an account ? <span>Login Here</span>
        </p>
        <div className="agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing ,I agree to the term and policy</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
