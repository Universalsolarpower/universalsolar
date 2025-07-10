import React from 'react'

export default function Project() {
  return (
     <section id="projects" className="section projects-section">
        <div className="container">
            <h2 className="section-title text-white" data-aos="fade-up">Our Featured Projects</h2>
            <div className="row">
                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                    <div className="project-card">
                        <div className="project-image">
                            <i className="fas fa-home"></i>
                        </div>
                        <div className="project-content">
                            <h4 className='res-font'>Residential Solar Installation</h4>
                            <p>5kW rooftop solar system for residential home in Chennai, providing 80% energy savings.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                    <div className="project-card">
                        <div className="project-image">
                            <i className="fas fa-building"></i>
                        </div>
                        <div className="project-content">
                            <h4>Commercial Solar Project</h4>
                            <p>100kW commercial solar installation for manufacturing facility with grid-tie system.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                    <div className="project-card">
                        <div className="project-image">
                            <i className="fas fa-industry"></i>
                        </div>
                        <div className="project-content">
                            <h4>Industrial Solar Plant</h4>
                            <p>500kW solar power plant for industrial complex with advanced monitoring systems.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

  )
}
