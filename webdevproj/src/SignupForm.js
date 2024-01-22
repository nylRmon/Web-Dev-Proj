import React from "react";
import { useForm } from "react-hook-form";

const SignupForm = ({ onSignup, onToggleSignup }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    onSignup(data.username);
    console.log("Username:", data.username);
    console.log("Password:", data.password);
  };

  return (
    <div className="overlay">
      <div className="container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {" "}
          {}
          <label>Username:</label>
          <input
            type="text"
            {...register("username", { required: "Username is required" })}
          />
          <br />
          {errors.username && <p>{errors.username.message}</p>}
          <br />
          <label>Password:</label>
          <input
            type="password"
            {...register("password", { required: "Password is required" })}
          />
          <br />
          {errors.password && <p>{errors.password.message}</p>}
          <br />
          <button type="submit">Sign Up</button>
        </form>
        <br />
        <p>
          Already have an account? <span onClick={onToggleSignup}>Log In</span>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;