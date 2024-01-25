import React from "react";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import Forumhome from "./Forumhome";
import ForumProducts from "./ForumProducts";
import AboutUs from "./About";
import LoginForm from "./LoginForm";
import "./App.css";

const Forum = ({ user }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/Forum">Home</Link>
          </li>
          <li>
            <Link to="/ForumProducts">Products</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          {/* Replace the logout button with a Link component */}
          <li>
            <Link to="/" onClick={handleLogout}>Logout</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Forumhome user={user} />} />
        <Route path="/ForumProducts" element={<ForumProducts />} />
        <Route path="/About" element={<AboutUs />} />
        <Route path="/LoginForm" element={<LoginForm />} />
      </Routes>
    </div>
  );
};

export default Forum;
