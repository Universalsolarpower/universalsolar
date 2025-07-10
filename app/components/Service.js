import React from 'react'
import { FaSolarPanel, FaWrench, FaChartLine, FaBatteryFull } from 'react-icons/fa'

export default function Service() {
  return (
    <section id="services" className="section">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">Our Solar Services</h2>
        <div className="row">
          <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div className="service-card">
              <div className="service-icon">
                <FaSolarPanel size={40} />
              </div>
              <h4 className="service-title">Solar Panel Installation</h4>
              <p>Professional installation of high-efficiency solar panels for residential and commercial properties with warranty coverage.</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div className="service-card">
              <div className="service-icon">
                <FaWrench size={40} />
              </div>
              <h4 className="service-title">Solar Maintenance</h4>
              <p>Regular maintenance and cleaning services to ensure optimal performance and longevity of your solar system.</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
            <div className="service-card">
              <div className="service-icon">
                <FaChartLine size={40} />
              </div>
              <h4 className="service-title">Energy Auditing</h4>
              <p>Comprehensive energy assessments to optimize your power consumption and maximize solar system efficiency.</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="400">
            <div className="service-card">
              <div className="service-icon">
                <FaBatteryFull size={40} />
              </div>
              <h4 className="service-title">Battery & Storage</h4>
              <p>Advanced battery storage solutions to store excess energy and provide backup power during outages.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
