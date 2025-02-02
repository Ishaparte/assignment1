import React from "react";
import "../styles/landing.css";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const nav = useNavigate();
  
  const handlePay = () => {
    nav("/payment");
  };

  return (
    <div className="landing">
      <header className="hero">
        <div className="head">
          <img src="/img/landingpage.png" alt="Landing Page" className="landimg" />
          <div className="hero-content">
            <h1>Boost Your Brand Visibility & Reach New Heights</h1>
            <p>With Our Expertise</p>
          </div>
        </div>

        <div className="hero-button">
          <button>Schedule a Consultation</button>
        </div>
      </header>

      <section className="services">
        <h2>What Services Are We Offering</h2>
        <ul>
          <li>Personal Branding</li>
          <li>Online Management</li>
          <li>Reputation Management</li>
          <li>Influencer Building</li>
        </ul>
        <button onClick={handlePay}>Make a Payment</button>
      </section>
    </div>
  );
};

export default LandingPage;
