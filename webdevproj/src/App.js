import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import Forum from "./Forum";
import ForumProducts from "./ForumProducts"; 
import "./App.css";

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
      <Routes>
        <Route
          path="/"
          element={
            !user ? (
              <LoginForm onLogin={handleLogin} onToggleSignup={handleToggleSignup} />
            ) : (
              <Navigate to="/Forum" replace />
            )
          }
        />
        <Route
          path="/signup"
          element={
            showSignup ? (
              <SignupForm onSignup={handleSignup} onToggleSignup={handleToggleSignup} />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
        <Route path="/Forum" element={<Forum user={user} />} />
        <Route path="/ForumProducts" element={<ForumProducts />} />
      </Routes>
    </Router>
  );
};

export default App;
