import React, { useState } from "react";
import { Link, Routes, Route, useParams, useNavigate } from "react-router-dom";
import ForumHome from "./Forumhome";
import ForumProducts from "./ForumProducts";
import ForumOrders from "./ForumOrders";
import { Category } from "@material-ui/icons";

const Forum = ({ user }) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const {selectedCategory, setSelectedCategory} = useState("Dormitory Rental");

    const handleCategoryChange = (Category) => {
      setSelectedCategory(Category);
    }

  
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Category</Link>
              <div>
                <select
                  value={selectedCategory}
                  onChange={(e) => handleCategoryChange(e.target.value)}
                >
                  <option value="Dormitory Rental">Dormitory Rental</option>
                  <option value="Computer & Tech">Computer & Tech</option>
                  <option value="Food & Drinks">Food & Drinks</option>
                  <option value="Free Items">Free Items</option>
              </select>
              </div>
            </li>
            <li>
              <Link to="/orders">Orders</Link>
            </li>
          </ul>
        </nav>
  
        <Routes>
          <Route path="/" element={<ForumHome user={user} />} />
          <Route
            path="/products"
            element={<ForumProducts category={selectedCategory} />}
          />
          <Route path="/orders" element={<ForumOrders />} />
        </Routes>
      </div>
    );
  };

  export default Forum;