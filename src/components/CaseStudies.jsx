import React from "react";
import "../styles/casestudies.css";

const CaseStudies = () => {
  return (
    <section className="case-studies">
      <h2 className="case-title">Case Studies</h2>
      <p className="case-subtitle">Reel Result, Real Stories</p>

    
      <div className="case-grid">
       
        <div className="case-card">
          <img src="/img/service1.jpg" alt="Startup Founder" className="case-img" />
          <div className="case-info">
            <p className="case-text">Building Business Strategies For Start-up Founders</p>
            <span className="case-tag">2.6x Customer rates</span>
          </div>
        </div>

       
        <div className="case-card">
          <img src="/img/service2.jpg" alt="Event PR" className="case-img" />
          <div className="case-info">
            <p className="case-text">Executive PR Campaigns to Drive Event Ticket Sales</p>
            <span className="case-tag">90K+ Ticket sold</span>
          </div>
        </div>

       
        <div className="case-card">
          <img src="/img/service3.jpg" alt="Instagram Influencer" className="case-img" />
          <div className="case-info">
            <p className="case-text">Social visibility for Instagram Influencers</p>
            <span className="case-tag">1M+ Impressions</span>
          </div>
        </div>

       
        <div className="case-card">
          <img src="/img/service4.jpg" alt="Film PR" className="case-img" />
          <div className="case-info">
            <p className="case-text">Crafting PR Strategies to Create Hype For Film Premiers</p>
            <span className="case-tag">50K+ Media mentions</span>
          </div>
        </div>
      </div>

      
      <div className="button-container">
        <button className="case-button">View More</button>
      </div>
    </section>
  );
};

export default CaseStudies;
