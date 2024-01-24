import React from "react";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import Forumhome from "./Forumhome";
import ForumProducts from "./ForumProducts";
import ForumOrders from "./ForumOrders";
import LoginForm from "./LoginForm";
import "./App.css";

const Forum = ({ user }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Use navigate to go to the login page
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
            <Link to="/ForumOrders">Orders</Link>
          </li>
          {/* Add a logout button */}
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Forumhome user={user} />} />
        <Route path="/ForumProducts" element={<ForumProducts />} />
        <Route path="/ForumOrders" element={<ForumOrders />} />
        <Route path="/LoginForm" element={<LoginForm />} />
      </Routes>
    </div>
  );
};

export default Forum;
