import React from "react";
import { Link, Routes, Route, useParams, useNavigate } from "react-router-dom";
import ForumHome from "./Forumhome";
import ForumProducts from "./ForumProducts";
import ForumOrders from "./ForumOrders";

const Forum = ({ user }) => {
    const navigate = useNavigate();
    const { id } = useParams();
  
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/orders">Orders</Link>
            </li>
          </ul>
        </nav>
  
        <Routes>
          <Route path="/" element={<ForumHome user={user} />} />
          <Route path="/products" element={<ForumProducts />} />
          <Route path="/orders" element={<ForumOrders />} />
        </Routes>
      </div>
    );
  };

  export default Forum;