import React from "react";
import { useForm } from "react-hook-form";

const LoginForm = ({ onLogin, onToggleSignup }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Assuming you are using "email" as the name for the email field
    onLogin(data.email);
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Email:</label>
        <input
          type="text"
          {...register("email", { required: "Email is required" })}
        />
        <br />
        {errors.email && <p>{errors.email.message}</p>}
        <br />
        <label>Password:</label>
        <input
          type="password"
          {...register("password", { required: "Password is required" })}
        />
        <br />
        {errors.password && <p>{errors.password.message}</p>}
        <br />
        <button type="submit">Login</button>
      </form>
      <br />
      <p>
        Don't have an account? <button onClick={onToggleSignup}>Sign Up</button>
      </p>
    </div>
  );
};

export default LoginForm;
