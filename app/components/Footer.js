import React from 'react';
import { Facebook, Twitter, Youtube, Linkedin, MapPin, Phone, Mail, Clock, ArrowRight, Zap, Sun } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark text-white position-relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="position-absolute top-0 start-0 w-100 h-100 opacity-25">
        <div className="position-absolute bg-warning rounded-circle" 
             style={{
               width: '300px', 
               height: '300px',
               top: '-150px',
               left: '-150px',
               filter: 'blur(60px)',
               animation: 'float 8s ease-in-out infinite'
             }}></div>
        <div className="position-absolute bg-info rounded-circle" 
             style={{
               width: '250px', 
               height: '250px',
               bottom: '-125px',
               right: '-125px',
               filter: 'blur(60px)',
               animation: 'float 10s ease-in-out infinite reverse'
             }}></div>
        <div className="position-absolute bg-success rounded-circle" 
             style={{
               width: '200px', 
               height: '200px',
               top: '50%',
               left: '50%',
               transform: 'translate(-50%, -50%)',
               filter: 'blur(60px)',
               animation: 'float 12s ease-in-out infinite'
             }}></div>
      </div>

      {/* Floating particles */}
      <div className="position-absolute top-0 start-0 w-100 h-100 opacity-50">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="position-absolute bg-warning rounded-circle"
            style={{
              width: '4px',
              height: '4px',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `sparkle ${2 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="container py-5 position-relative" style={{zIndex: 10}}>
        {/* Main Footer Content */}
        <div className="row g-4 mb-5">
          {/* Company Info */}
          <div className="col-lg-6 col-xl-5">
            <div className="modern-card p-4 rounded-4 bg-dark bg-opacity-50" style={{backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.1)'}}>
              <div className="d-flex align-items-center mb-4">
                <div className="position-relative me-3">
                  <div className="d-flex align-items-center justify-content-center rounded-3 bg-warning shadow-lg" style={{width: '48px', height: '48px'}}>
                    <Sun size={24} className="text-dark" />
                  </div>
                  <div className="position-absolute bg-success rounded-circle" style={{width: '12px', height: '12px', top: '-2px', right: '-2px', animation: 'pulse 2s infinite'}}></div>
                </div>
                <h3 className="h4 fw-bold mb-0 text-gradient">
                  Universal Solar Power Solutions
                </h3>
              </div>
              
              <p className="text-light mb-4 lh-base fs-6">
                Leading provider of renewable energy solutions in Chennai. 
                We're committed to making solar energy accessible and affordable for everyone.
              </p>
              
              <div className="d-flex gap-3">
                {[
                  { icon: Facebook, color: 'btn-outline-primary' },
                  { icon: Twitter, color: 'btn-outline-info' },
                  { icon: Youtube, color: 'btn-outline-danger' },
                  { icon: Linkedin, color: 'btn-outline-primary' }
                ].map(({ icon: Icon, color }, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`btn ${color} btn-sm rounded-3 p-2 social-icon-modern`}
                    style={{width: '40px', height: '40px'}}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-3 col-md-6">
            <div className="modern-section">
              <h5 className="fw-bold mb-4 text-warning d-flex align-items-center">
                <Zap size={20} className="me-2" />
                Quick Links
              </h5>
              <ul className="list-unstyled">
                {['Home', 'About Us', 'Services', 'Projects', 'Contact'].map((link, index) => (
                  <li key={link} className="mb-3">
                    <a
                      href={`#${link.toLowerCase().replace(' ', '')}`}
                      className="text-light text-decoration-none modern-link d-flex align-items-center"
                    >
                      <ArrowRight size={16} className="me-2 link-arrow-modern" />
                      <span>{link}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Services */}
          <div className="col-lg-3 col-md-6">
            <div className="modern-section">
              <h5 className="fw-bold mb-4 text-warning d-flex align-items-center">
                <Sun size={20} className="me-2" />
                Our Services
              </h5>
              <ul className="list-unstyled">
                {[
                  'Solar Panel Installation',
                  'Solar Maintenance',
                  'Energy Auditing',
                  'Battery Storage',
                  'Consultation'
                ].map((service, index) => (
                  <li key={service} className="mb-3">
                    <a
                      href="#"
                      className="text-light text-decoration-none modern-link d-flex align-items-center"
                    >
                      <ArrowRight size={16} className="me-2 link-arrow-modern" />
                      <span>{service}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Info - Full Width Card */}
        <div className="modern-card p-4 rounded-4 mb-5 bg-dark bg-opacity-50" style={{backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.1)'}}>
          <h5 className="text-center fw-bold mb-4 text-warning d-flex align-items-center justify-content-center">
            <MapPin size={24} className="me-2" />
            Contact Information
          </h5>
          
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="contact-card p-3 rounded-3 bg-secondary bg-opacity-25 h-100">
                <div className="d-flex align-items-start">
                  <MapPin size={20} className="text-warning me-3 mt-1 flex-shrink-0" />
                  <div>
                    <h6 className="fw-semibold text-warning mb-2">Address</h6>
                    <small className="text-light lh-base">
                      Plot No. 64, G2 Lakshmi Nagar,<br />
                      Eurasia Foundation,<br />
                      200 ft Service Road, Anakaputhur,<br />
                      Chennai-600070
                    </small>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="contact-card p-3 rounded-3 bg-secondary bg-opacity-25 h-100">
                <div className="d-flex align-items-start">
                  <Phone size={20} className="text-warning me-3 mt-1" />
                  <div>
                    <h6 className="fw-semibold text-warning mb-2">Phone</h6>
                    <div className="text-light">
                      <small className="d-block">+91 97504 02731</small>
                      <small className="d-block">+91 97908 66659</small>
                      <small className="d-block">+91 80564 65693</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="contact-card p-3 rounded-3 bg-secondary bg-opacity-25 h-100">
                <div className="d-flex align-items-start">
                  <Clock size={20} className="text-warning me-3 mt-1" />
                  <div>
                    <h6 className="fw-semibold text-warning mb-2">Hours</h6>
                    <small className="text-light">Mon - Sat: 9AM - 6PM</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-top border-secondary pt-4">
          <div className="row align-items-center g-3">
            <div className="col-md-6 text-center text-md-start">
              <div className="d-flex align-items-center justify-content-center justify-content-md-start">
                <div className="d-flex align-items-center justify-content-center rounded-3 bg-warning me-2" style={{width: '32px', height: '32px'}}>
                  <Sun size={16} className="text-dark" />
                </div>
                <small className="text-light">
                  © 2025 Universal Solar Power Solutions. All rights reserved.
                </small>
              </div>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <small className="text-light">
                Powered by Clean Energy <span className="text-danger">❤️</span> Designed with Sneha
              </small>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative bottom border */}
      <div className="position-absolute bottom-0 start-0 w-100 bg-warning" style={{height: '3px'}}></div>

      {/* Custom CSS for modern animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(180deg); }
        }

        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0); }
          50% { opacity: 1; transform: scale(1); }
        }

        .text-gradient {
          background: linear-gradient(45deg, #ffc107, #fd7e14);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .modern-card {
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        .modern-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(255, 193, 7, 0.2);
        }

        .modern-section {
          transition: transform 0.3s ease;
        }

        .modern-section:hover {
          transform: translateY(-3px);
        }

        .modern-link {
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .modern-link:hover {
          color: #ffc107 !important;
          transform: translateX(8px);
        }

        .link-arrow-modern {
          transition: all 0.3s ease;
          opacity: 0;
          transform: translateX(-10px);
        }

        .modern-link:hover .link-arrow-modern {
          opacity: 1;
          transform: translateX(0);
        }

        .social-icon-modern {
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .social-icon-modern:hover {
          transform: translateY(-5px) scale(1.1);
          box-shadow: 0 8px 20px rgba(255, 193, 7, 0.3);
        }

        .social-icon-modern:before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s;
        }

        .social-icon-modern:hover:before {
          left: 100%;
        }

        .contact-card {
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .contact-card:hover {
          transform: translateY(-3px);
          border-color: rgba(255, 193, 7, 0.3);
          box-shadow: 0 5px 15px rgba(255, 193, 7, 0.1);
        }

        /* Responsive text sizing */
        @media (max-width: 768px) {
          .text-gradient {
            font-size: 1.25rem;
          }
        }

        /* Smooth scrolling for anchor links */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </footer>
  );
}