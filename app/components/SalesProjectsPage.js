"use client";
import React, { useState, useEffect, useRef } from "react";

export default function SalesProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef(null);
  const headerRef = useRef(null);

  const projects = [
    { id: 1, category: "residential", title: "Green Valley Residential Complex", description: "Complete solar installation for 200 residential units, featuring advanced battery storage and smart grid integration.", capacity: "5.2 MW", status: "completed" },
    { id: 2, category: "commercial", title: "TechCorp Headquarters", description: "Rooftop solar system with energy management system, reducing corporate carbon footprint by 80%.", capacity: "2.8 MW", status: "completed" },
    { id: 3, category: "industrial", title: "Manufacturing Plant Solar Array", description: "Large-scale ground-mounted solar installation powering heavy industrial operations with 24/7 clean energy.", capacity: "15.5 MW", status: "ongoing" },
    { id: 4, category: "utility", title: "Sunrise Solar Farm", description: "Utility-scale solar farm providing clean energy to 50,000 homes with advanced tracking systems.", capacity: "100 MW", status: "completed" },
    { id: 5, category: "residential", title: "Eco Village Community", description: "Sustainable housing development with integrated solar panels, EV charging stations, and energy storage.", capacity: "3.7 MW", status: "ongoing" },
    { id: 6, category: "commercial", title: "Shopping Mall Solar Canopy", description: "Innovative solar canopy installation providing shade for parking while generating clean energy for the mall.", capacity: "4.2 MW", status: "completed" },
    { id: 7, category: "utility", title: "Desert Solar Installation", description: "Massive desert solar farm with concentrated solar power technology and molten salt storage system.", capacity: "250 MW", status: "ongoing" },
    { id: 8, category: "industrial", title: "Port Authority Solar Grid", description: "Maritime solar installation powering port operations with floating solar panels and shore power systems.", capacity: "8.9 MW", status: "completed" }
  ];

  const stats = [
    { number: "250+", label: "Projects Completed" },
    { number: "500MW", label: "Total Capacity" },
    { number: "15+", label: "Countries Served" },
    { number: "1M+", label: "Homes Powered" }
  ];

  const filters = [
    { key: "all", label: "All Projects" },
    { key: "residential", label: "Residential" },
    { key: "commercial", label: "Commercial" },
    { key: "industrial", label: "Industrial" },
    { key: "utility", label: "Utility Scale" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      setScrollY(currentScrollY);

      if (headerRef.current) {
        if (currentScrollY > 50) {
          headerRef.current.style.background = "rgba(255, 255, 255, 0.98)";
          headerRef.current.style.backdropFilter = "blur(25px)";
        } else {
          headerRef.current.style.background = "rgba(255, 255, 255, 0.95)";
          headerRef.current.style.backdropFilter = "blur(20px)";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredProjects = activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter);

  const handleProjectClick = (projectId) => {
    console.log(`View details for project ${projectId}`);
  };

  return (
    <div className="min-vh-100 overflow-hidden" style={{ fontFamily: "'Inter', sans-serif", background: "linear-gradient(135deg, #00AEEF 0%, #FFD700 50%, #4CAF50 100%)" }}>
      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes rotate {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }

        .animate-fade-in-up { animation: fadeInUp 1s ease forwards; }
        .animate-rotate { animation: rotate 20s linear infinite; }
        .project-title { background: linear-gradient(45deg, #00AEEF, #4CAF50); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .card-hover:hover { transform: translateY(-10px); box-shadow: 0 1rem 3rem rgba(0,0,0,.175); }
        .btn-gradient { background: linear-gradient(45deg, #00AEEF, #FFD700); border: none; }
        .btn-gradient:hover { background: linear-gradient(45deg, #FFD700, #4CAF50); transform: translateY(-2px); }
        .badge-gradient { background: linear-gradient(45deg, #FFD700, #4CAF50); }
      `}</style>

      {/* Hero Section */}
      <section ref={heroRef} className="pt-5 pb-4 text-center position-relative overflow-hidden" style={{ transform: `translateY(${scrollY * 0.3}px)`, marginTop: "80px" }}>
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: "rgba(255, 255, 255, 0.1)", backdropFilter: "blur(10px)", zIndex: 0 }} />
        <div className="container position-relative" style={{ zIndex: 10 }}>
          <h1 className="display-2 hero-title-project fw-bold text-white mb-4 hero-title animate-fade-in-up" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)" }}>
            Our Solar Projects
          </h1>
          <p className="lead hero-subtitle-project text-white-50 mb-5 hero-subtitle animate-fade-in-up">
            Powering communities with sustainable energy solutions across the globe
          </p>
          <div className="row g-3 g-md-4 mt-5 hero-stats animate-fade-in-up">
            {stats.map((stat, index) => (
              <div key={index} className="col-6 col-md-3">
                <div className="card bg-white bg-opacity-25 border-white border-opacity-50 rounded-4 p-3 p-md-4 text-center card-hover transition-all">
                  <div className="display-6 display-md-3 fw-bold text-white mb-2" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)" }}>
                    {stat.number}
                  </div>
                  <div className="text-white-50 fw-semibold small">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white bg-opacity-95 rounded-top-4 position-relative py-5" style={{ zIndex: 20 }}>
        <div className="container">
          {/* Filter Buttons */}
          <div className="d-flex justify-content-center gap-2 gap-md-3 mb-5 flex-wrap">
            {filters.map((filter) => (
              <button key={filter.key} onClick={() => setActiveFilter(filter.key)} className={`btn px-3 px-md-4 py-2 rounded-pill fw-semibold transition-all ${activeFilter === filter.key ? "btn-gradient text-white shadow-lg" : "btn-light text-dark"}`}>
                {filter.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="row g-4 g-md-5">
            {filteredProjects.map((project, index) => (
              <div key={project.id} className="col-12 col-md-6 col-lg-4">
                <div className="card h-100 border-0 shadow-lg rounded-4 overflow-hidden card-hover project-card" style={{ animation: "fadeInUp 0.8s ease forwards", animationDelay: `${index * 0.1}s` }}>
                  <div className="card-img-top position-relative overflow-hidden" style={{ height: "200px", background: "linear-gradient(45deg, #00AEEF, #FFD700)" }}>
                    <div className="position-absolute top-50 start-50 translate-middle opacity-25 animate-rotate" style={{ fontSize: "4rem" }}>🌞</div>
                  </div>
                  <div className="card-body p-4 p-md-5">
                    <h3 className="card-title h4 fw-bold mb-3 project-title">{project.title}</h3>
                    <p className="card-text text-muted mb-4 lh-lg">{project.description}</p>
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3 mb-4">
                      <span className="badge badge-gradient text-white px-3 py-2 rounded-pill fw-semibold">{project.capacity}</span>
                      <span className={`badge px-3 py-2 rounded-pill fw-semibold ${project.status === "completed" ? "bg-success-subtle text-success" : "bg-warning-subtle text-warning"}`}>
                        {project.status === "completed" ? "Completed" : "Ongoing"}
                      </span>
                    </div>
                    <button onClick={() => handleProjectClick(project.id)} className="btn btn-gradient text-white fw-semibold w-100 py-3 rounded-3 text-uppercase tracking-wide">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
