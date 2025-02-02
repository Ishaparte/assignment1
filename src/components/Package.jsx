import React from "react";
import "../styles/package.css";

const Package = () => {
  return (
    <section className="packages-section">
      
      <h2 className="packages-title">Packages</h2>
      <p className="packages-subtitle">Subscription plans tailored for your needs</p>

      
      <div className="packages-grid">
       
        <div className="package-card">
          <div className="head">
          <img src="/img/price-tag.png" alt="Basic Package" className="package-img" />
          <h3 className="package-name">Basic Package</h3>
          </div>
          <p className="package-price">$20</p>
          <ul className="package-features">
            <li>✔ 10 Social Media Posts</li>
            <li>✔ Basic PR Coverage</li>
            <li>✔ 1 Consultation Call</li>
          </ul>
          <button className="package-btn">Get Started</button>
        </div>

        
        <div className="package-card premium">
          <div className="head">
          <img src="/img/price-tag.png" alt="Premium Package" className="package-img" />
          <h3 className="package-name">Premium Package</h3>
          </div>
          <p className="package-price">$50</p>
          <ul className="package-features">
            <li>✔ 30 Social Media Posts</li>
            <li>✔ Advanced PR Coverage</li>
            <li>✔ 3 Consultation Calls</li>
            <li>✔ Influencer Collaborations</li>
          </ul>
          <button className="package-btn">Get Started</button>
        </div>

        
        <div className="package-card">
          <div className="head">
          <img src="/img/price-tag.png" alt="Business Package" className="package-img" />
          <h3 className="package-name">Business Package</h3>
          </div>
          <p className="package-price">$80</p>
          <ul className="package-features">
            <li>✔ 50+ Social Media Posts</li>
            <li>✔ Full PR & Branding</li>
            <li>✔ Weekly Consultation</li>
            <li>✔ Influencer & Media Coverage</li>
          </ul>
          <button className="package-btn">Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default Package;
