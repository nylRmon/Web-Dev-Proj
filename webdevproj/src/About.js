import React from 'react';
import "./About.css";

const AboutUs = () => {
  return (
    <div>
      <header className="header">
        <h1>About Our Website</h1>
      </header>

      <section className="main-content">
        <p>Welcome to our website! We are dedicated to providing valuable information and services to our users. Whether you're here for knowledge, entertainment, or a specific purpose, we aim to make your experience enjoyable and worthwhile.</p>

        <p>Our website covers a variety of topics, including [list your main topics or services]. We strive to keep our content up-to-date, relevant, and user-friendly.</p>

        <p>Feel free to explore and discover what our website has to offer. If you have any questions or feedback, don't hesitate to contact us.</p>
      </section>

      <footer className="footer">
        <p>&copy; 2024 Your Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutUs;
