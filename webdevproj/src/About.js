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
        Greetings from our website! Our commitment lies on offering our users useful information and services. We want your experience to be pleasurable and worthwhile, regardless of whether you are here for information, enjoyment, or a specific goal.
        </p>

        <p>
        We offer a wide range of themes on our website, We make an effort to maintain our content current, pertinent, and easy to use.
        </p>

        <p>
        Please take a look around to see what our website has to offer. Do not hesitate to contact us with any queries or comments.
        </p>

        {/* Include the FeedbackForm component */}
        <FeedbackForm />
      </section>

      <footer className="footer">
        <p> 2024 TUP COMMUNITY!</p>
        <p> ALL RIGHTS RESERVED</p>
      </footer>
    </div>
  );
};

export default AboutUs;
