// LoginForm.js
import React from "react";
import { useForm } from "react-hook-form";

const LoginForm = ({ onLogin, onToggleSignup }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    onLogin(data.username);
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
      <button type="submit">Login</button>
      <p>
        Don't have an account?{" "}
        <span onClick={onToggleSignup}>Sign up</span>
      </p>
    </form>
  );
};

export default LoginForm;
