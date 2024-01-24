// SignupForm.js
import React from "react";
import { useForm } from "react-hook-form";

const SignupForm = ({ onSignup, onToggleSignup }) => {
  const { register, handleSubmit, watch, setError } = useForm();

  const onSubmit = (data) => {
    if (data.password !== data.confirmPassword) {
      setError("confirmPassword", {
        type: "manual",
        message: "Passwords do not match",
      });
      return;
    }

    
    onSignup(data.username);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Username:
        <input {...register("username")} />
      </label>
      <label>
        Password:
        <input type="password" {...register("password")} />
      </label>
      <label>
        Confirm Password:
        <input type="password" {...register("confirmPassword")} />
        {watch("password") !== watch("confirmPassword") && (
          <p>Passwords do not match</p>
        )}
      </label>
      <button type="submit">Sign up</button>
      <p>
        Already have an account?{" "}
        <span onClick={onToggleSignup}>Login</span>
      </p>
    </form>
  );
};

export default SignupForm;
