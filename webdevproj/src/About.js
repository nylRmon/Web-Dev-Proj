import React, { useState } from "react";
import "./About.css";

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState("");

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Replace 'YOUR_GOOGLE_FORM_LINK' with the actual link to your Google Form
    const googleFormLink =
      "https://docs.google.com/forms/d/1rPxXgIOiCDlWAOd_xbzbDAp-BCQVH9OWtr2tFYFfXZE/formResponse";

    try {
      // Send data to Google Forms using Google Apps Script URL
      const response = await fetch(googleFormLink, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({ "entry.787049413": feedback }).toString(), // Replace 'entry.787049413' with the actual entry ID from your Google Form
      });

      if (response.ok) {
        console.log("Feedback submitted successfully!");
        // Optionally, you can reset the feedback state or display a success message
        setFeedback("");
      } else {
        console.error("Failed to submit feedback.");
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
    }
  };

  return (
    <form className="feedback-form" onSubmit={handleSubmit}>
      <label htmlFor="feedback">Share your feedback:</label>
      <textarea
        id="feedback"
        name="feedback"
        rows="4"
        value={feedback}
        onChange={handleFeedbackChange}
        required
      ></textarea>
      <button type="submit">Submit Feedback</button>
    </form>
  );
};

// Updated AboutUs component with the added FeedbackForm
const AboutUs = () => {
  return (
    <div>
      <header className="header">
        <h1>About Our Website</h1>
      </header>

      <section className="main-content">
        <p>
          Welcome to our website! We are dedicated to providing valuable
          information and services to our users. Whether you're here for
          knowledge, entertainment, or a specific purpose, we aim to make your
          experience enjoyable and worthwhile.
        </p>

        <p>
          Our website covers a variety of topics, including [list your main
          topics or services]. We strive to keep our content up-to-date,
          relevant, and user-friendly.
        </p>

        <p>
          Feel free to explore and discover what our website has to offer. If
          you have any questions or feedback, don't hesitate to contact us.
        </p>

        {/* Include the FeedbackForm component */}
        <FeedbackForm />
      </section>

      <footer className="footer">
        <p>&copy; 2024 Your Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutUs;
