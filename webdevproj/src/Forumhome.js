import React from "react";
import { Link } from "react-router-dom";
import "./ForumHome.css"; // Import your CSS file

const ForumHome = ({ user }) => (
  <div className="home-container">
    <header>
      <h2>Welcome to Shopping Kingdom, {user}!</h2>
      <p>Your one-stop destination for online shopping.</p>
    </header>

    {/* Search bar */}
    <div className="search-container">
      <input type="text" placeholder="Search for products..." />
      <Link to="/products">
        <button type="submit">Search</button>
      </Link>
    </div>

    {/* Featured Products */}
    <section className="featured-products">
      <h3>Featured Products</h3>
      <div className="product">
        <img src="product1.jpg" alt="Product 1" />
        <p>Product Name 1</p>
        <span>$19.99</span>
      </div>

      <div className="product">
        <img src="product2.jpg" alt="Product 2" />
        <p>Product Name 2</p>
        <span>$29.99</span>
      </div>

      {/* Add more featured products as needed */}
    </section>

    {/* Special Offers */}
    <section className="special-offers">
      <h3>Special Offers</h3>
      <div className="offer">
        <img src="offer1.jpg" alt="Offer 1" />
        <p>Special Offer 1</p>
        <span>50% off</span>
      </div>

      <div className="offer">
        <img src="offer2.jpg" alt="Offer 2" />
        <p>Special Offer 2</p>
        <span>Free Shipping</span>
      </div>

      {/* Add more special offers as needed */}
    </section>
  </div>
);

export default ForumHome;
