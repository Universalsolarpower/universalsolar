import React from 'react'
import { FaSolarPanel, FaWrench, FaChartLine, FaBatteryFull } from 'react-icons/fa'

export default function Service() {
  return (
    <section id="services" className="section">
      <div className="container">
        <h2 className="section-title text-center" data-aos="fade-up">
          Our Solar Services
        </h2>
        <div className="row">
          {/* EPC Services */}
          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div className="service-card">
              <div className="service-icon">
                <FaSolarPanel size={40} />
              </div>
              <h4 className="service-title">EPC Solutions</h4>
              <p>
                End-to-end services including engineering design, site survey, 
                material procurement, equipment supply, civil planning, erection, and commissioning.
              </p>
            </div>
          </div>

          {/* O&M Services */}
          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div className="service-card">
              <div className="service-icon">
                <FaWrench size={40} />
              </div>
              <h4 className="service-title">Operation & Maintenance</h4>
              <p>
                Performance monitoring, preventive and corrective maintenance, safety checks, 
                inverter monitoring, data logging, and thermographic inspections to maximize system uptime.
              </p>
            </div>
          </div>

          {/* Re-engineering & Optimization */}
          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
            <div className="service-card">
              <div className="service-icon">
                <FaChartLine size={40} />
              </div>
              <h4 className="service-title">Re-engineering & Optimization</h4>
              <p>
                System assessment, design upgrades, refurbishing, optimization, and replacement services 
                to improve efficiency and extend the overall life of your solar plant.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
