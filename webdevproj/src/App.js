import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import Forum from "./Forum";
import ForumProducts from "./ForumProducts";
import AboutUs from "./About"; 
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
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/Forum">Home</Link>
            </li>
            <li>
            </li>
            <li>
    
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
          </ul>
        </nav>
      </div>
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
        <Route path="/About" element={<AboutUs />} />
      </Routes>
    </Router>
  );
};

export default App;
