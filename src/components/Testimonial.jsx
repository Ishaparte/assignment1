import React from "react";
import "../styles/testimonial.css";

const Testimonial = () => {
  return (
    <section className="testimonial-section">
      
      <h2 className="testimonial-title">Testimonials</h2>

      <div className="testimonial-grid">
        
        <div className="testimonial-card">
          <p className="testimonial-quote">
            "The strategies provided helped my business scale 2x faster. Highly recommended!"
          </p>
          <div className="testimonial-user">
            <img src="/img/service2.jpg" alt="User 1" className="testimonial-img" />
            <div className="testimonial-info">
              <p className="testimonial-name">John Doe</p>
              <span className="testimonial-role">Startup Founder</span>
            </div>
          </div>
        </div>

        
        <div className="testimonial-card">
          <p className="testimonial-quote">
            "Their PR campaigns significantly boosted our brand’s social visibility."
          </p>
          <div className="testimonial-user">
            <img src="/img/service1.jpg" alt="User 2" className="testimonial-img" />
            <div className="testimonial-info">
              <p className="testimonial-name">Sarah Smith</p>
              <span className="testimonial-role">Marketing Expert</span>
            </div>
          </div>
        </div>

        
        <div className="testimonial-card">
          <p className="testimonial-quote">
            "Amazing strategies that brought us 1M+ impressions in a few weeks!"
          </p>
          <div className="testimonial-user">
            <img src="/img/service3.jpg" alt="User 3" className="testimonial-img" />
            <div className="testimonial-info">
              <p className="testimonial-name">Alex Brown</p>
              <span className="testimonial-role">Social Media Influencer</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
