import React, { useState } from "react";
import "./App.css";
import { useForm } from "react-hook-form";

const LoginForm = ({ onLogin, onToggleSignup }) => {
  const onSubmit = (data) => {
    onLogin(data.username);
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Email:</label>
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
        <button type="submit">Login</button>
      </form>
      <br />
      <p>
        Don't have an account? <button onClick={onToggleSignup}>Sign Up</button>
      </p>
    </div>
  );
};

const SignupForm = ({ onSignup, onToggleSignup }) => {
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

const Forum = ({ user }) => {
  return (
    <div>
      <h2>Welcome, {user}!</h2>
      <p>This is the forum. You can start discussing topics here.</p>
    </div>
  );
};

const App = () => {
  const [user, setUser] = useState(null);
  const [showSignup, setShowSignup] = useState(false);

  const handleLogin = (username) => {
    setUser(username);
  };

  const handleSignup = (username) => {
    setUser(username);
    setShowSignup(false);
  };

  const handleToggleSignup = () => {
    setShowSignup(!showSignup);
  };

  return (
    <div>
      {!user ? (
        <LoginForm onLogin={handleLogin} onToggleSignup={handleToggleSignup} />
      ) : (
        <Forum user={user} />
      )}
      {showSignup && (
        <SignupForm
          onSignup={handleSignup}
          onToggleSignup={handleToggleSignup}
        />
      )}
    </div>
  );
};

export default App;
