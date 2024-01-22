import React from "react";
import { useForm } from 'react-hook-form'
import { FaGoogle } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';

const LoginForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();

  const onSubmit = (data) => {
    // Handle form submission here (e.g. send a request to the server)
    // If the login is successful, redirect the user to the desired page
    history.push('/dashboard');
  };

  return (
    <div className="container">
      <div className="forms-container">
      <div className="signin-signup">
        <form onSubmit={handleSubmit(onSubmit)} className="sign-in-form">
          <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                name="username"
                ref={register({ required: 'Username is required' })}
                placeholder="Username"
              />
              {errors.username && <p>{errors.username.message}</p>}
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                name="password"
                ref={register({ required: 'Password is required' })}
                type="password"
                placeholder="Password"
              />
              {errors.password && <p>{errors.password.message}</p>}
            </div>
            <input type="submit" value="Login" className="btn solid" />
            <p className="social-text">Or Sign in using TUP</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <FaGoogle />
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>



  );
};

export default LoginForm;