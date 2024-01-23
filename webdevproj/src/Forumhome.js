import React from "react";

const ForumHome = ({ user }) => (
  <div>
    <h2>Welcome to the Community, {user}!</h2>
    <p>Welcome to the TUP Community.</p>

    {/* Search bar */}
    <div className="search-container">
      <input type="text" placeholder="Search..." />
      <button type="submit">Search</button>
    </div>
  </div>
);

export default ForumHome;
