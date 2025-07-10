import React from 'react'

export default function Banner() {
  return (
    <div className='banner'>
      <section id="home" className="hero-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="hero-content">
                <h1 className="hero-title">Universal Solar Power Solutions</h1>
                <p className="hero-subtitle">Powering Your Future with Clean, Renewable Energy</p>
                <div className="hero-buttons">
                  <a href="#contact" className="btn-hero btn-primary-custom">Get Free Quote</a>
                  <a href="#about" className="btn-hero btn-secondary-custom">Learn More</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="floating-sun">
          <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="60" cy="60" r="25" fill="#FFD700" />
            <g stroke="#FFD700" strokeWidth="3" strokeLinecap="round">
              <line x1="60" y1="15" x2="60" y2="25" />
              <line x1="60" y1="95" x2="60" y2="105" />
              <line x1="105" y1="60" x2="95" y2="60" />
              <line x1="25" y1="60" x2="15" y2="60" />
              <line x1="90.36" y1="29.64" x2="83.64" y2="36.36" />
              <line x1="36.36" y1="83.64" x2="29.64" y2="90.36" />
              <line x1="90.36" y1="90.36" x2="83.64" y2="83.64" />
              <line x1="36.36" y1="36.36" x2="29.64" y2="29.64" />
            </g>
          </svg>
        </div>
      </section>
    </div>
  )
}
