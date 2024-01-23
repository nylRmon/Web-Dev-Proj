import React, { useState } from "react";
import { Link, Routes, Route, useParams, useNavigate } from "react-router-dom";
import ForumHome from "./Forumhome";
import ForumProducts from "./ForumProducts";
import ForumOrders from "./ForumOrders";
import LoginForm from "./LoginForm";

const Forum = ({ user }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    // Close the menu before navigating
    setIsMenuOpen(false);
    // Use window.location.replace for a total refresh
    window.location.replace("/LoginForm");
  };

  return (
    <div>
      <nav>
        <button onClick={handleToggleMenu}>Toggle Menu</button>
        {user && isMenuOpen && (
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Product</Link>
            </li>
            <li>
              <Link to="/orders">Orders</Link>
            </li>
            {/* Add a logout button */}
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        )}
      </nav>

      <Routes>
        <Route path="/" element={<ForumHome user={user} />} />
        <Route path="/products" element={<ForumProducts />} />
        <Route path="/orders" element={<ForumOrders />} />
        <Route path="/LoginForm" element={<LoginForm />} />
      </Routes>
    </div>
  );
};

export default Forum;
