import React from "react";

import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import "../../LoginStyle/Login.css";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="Main-Login">
      <div className="Login">
        <form className="Form-Login" onSubmit={handleSubmit(onSubmit)}>
          <p className="p-header">Sign In</p>
          <input
            className="main-input"
            type="email"
            placeholder="Email or Telephone Number"
            {...register("Email", { required: true })}
          />
          {errors.Email && <p style={{ color: "red" }}>** Email is required.</p>}
          <input
            className="main-input"
            type="password"
            placeholder="Password"
            {...register("Password", { required: true })}
            minLength={6}
          />
          {errors.Password && (
            <p style={{ color: "red" }}>** Password is required.</p>
          )}
          <button>Sign in</button>
          <div className="checkbox">
            <input type="checkbox" />
            <p>Remember me</p>
          </div>
          <p className="p-bottom">
            New to Netflix? <Link to="/Register">Sign up now</Link> 
            <br />
            <br />
            Watch free 30 days <Link to="/">Home page</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
