import React from "react";
import { Link } from "react-router-dom";

const ForumHome = ({ user }) => (
  <div>
    <h2>Welcome to the Community, {user}!</h2>
    <p>Welcome to the TUP Community.</p>

    {/* Search bar */}
    <div className="search-container">
      <input type="text" placeholder="Search..." />
      {/* Use Link to navigate to the order page */}
      <Link to="/products">
        <button type="submit">Search</button>
      </Link>
    </div>
  </div>
);

export default ForumHome;
