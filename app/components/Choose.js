import React from 'react';
import { FaAward, FaDollarSign, FaUserGraduate, FaHeadset } from 'react-icons/fa';

export default function Choose() {
  return (
    <section id="why-choose" className="section">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">
          Why Choose Universal Solar Power?
        </h2>
        <div className="row">
          <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div className="feature-box">
              <div className="feature-icon">
                <FaAward size={40} />
              </div>
              <h4>Premium Quality</h4>
              <p>We use only top-tier solar panels and components with international certifications and extended warranties.</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div className="feature-box">
              <div className="feature-icon">
                <FaDollarSign size={40} />
              </div>
              <h4>Affordable Pricing</h4>
              <p>Competitive pricing with flexible financing options and government subsidy assistance for maximum savings.</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
            <div className="feature-box">
              <div className="feature-icon">
                <FaUserGraduate size={40} />
              </div>
              <h4>Expert Team</h4>
              <p>Certified professionals with extensive experience in solar technology and electrical installations.</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="400">
            <div className="feature-box">
              <div className="feature-icon">
                <FaHeadset size={40} />
              </div>
              <h4>24/7 Support</h4>
              <p>Round-the-clock customer support with rapid response times for maintenance and troubleshooting.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
