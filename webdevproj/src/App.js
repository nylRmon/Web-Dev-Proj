import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./App.css";

import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  useParams,
  useNavigate,
} from "react-router-dom";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import Forum from "./Forum";
import {BrowserRouter as Router,Link,Route,Routes,useParams, useNavigate,} from "react-router-dom";
import LoginForm from "./LoginForm";  
import SignupForm from "./SignupForm";  
import Forum from "./Forum";  

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
    <Router>
      <div>
        {!user ? (
          <LoginForm
            onLogin={handleLogin}
            onToggleSignup={handleToggleSignup}
          />
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
    </Router>
  );
};

export default App;
