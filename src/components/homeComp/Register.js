import React from "react";
import { Link } from "react-router-dom";
import "../../LoginStyle/Register.css";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  
  return (
    <div className="Main-Register">
      <div className="Register-form">
        <h2 className="reg-h2">
          Unlimited movies, TV
          <br /> shows, and more.
        </h2>
        <h3 className="reg-h3">Watch anywhere. Cancel anytime.</h3>
        <p>
          <strong>Ready to watch? Create or restart your membership.</strong>
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="reg-input"
            placeholder="Email"
            type="email"
            {...register("Email", { required: true })}
          />
          {errors.Email && <p style={{ color: "red" }}>** Email is required.</p>}
          <input
            className="reg-input"
            placeholder="Password"
            type="password"
            {...register("Password", { required: true })}
            minLength={6}
          />
          {errors.Password && <p style={{ color: "red" }}>** Password is required.</p>}
          <input
            className="reg-input"
            placeholder="Confirm password"
            type="password"
            {...register("ConfirmPassword", { required: 'Confirm password is required' })}
            minLength={6}
          />
          {errors.ConfirmPassword && <p style={{ color: "red" }}>** Confirm Password is required.</p>}
          <button>Sign up</button>
        </form>
        <p>
          Do you have an account?<Link to="/Login">Sign in</Link>
          <br />
          <br />
          Watch free 30 days <Link to="/">Home page</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
