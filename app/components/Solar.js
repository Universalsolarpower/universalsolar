import React from "react";
import { FaSolarPanel, FaBullseye, FaEye, FaUser } from "react-icons/fa";

export default function Solar() {
  return (
    <section id="about" className="page-content">
      <div className="page-header">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h1 className="fade-in">About Universal Solar Power Solutions</h1>
              <p className="fade-in">
                Leading the renewable energy revolution with cutting-edge solar
                technology and sustainable solutions for a brighter tomorrow.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container section-padding">
        <div className="row align-items-center mb-5">
          <div className="col-lg-6">
            <div className="glass-card fade-in">
              <h2 className="mb-4" style={{ color: "var(--primary-blue)" }}>
                Our Story
              </h2>
              <p>
                Founded in 2015, Universal Solar Power Solutions has been at the
                forefront of the renewable energy revolution. We started with a
                simple mission: to make clean, sustainable energy accessible to
                everyone while protecting our planet for future generations.
              </p>
              <p>
                Over the years, we&apos;ve grown from a small team of passionate
                engineers to a leading solar energy company, serving thousands
                of customers across the globe. Our commitment to innovation,
                quality, and customer satisfaction has made us a trusted name in
                the solar industry.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="glass-card fade-in">
              <div
                style={{
                  height: "300px",
                  background: "var(--gradient-bg)",
                  borderRadius: "15px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: "4rem",
                }}
              >
                <FaSolarPanel />
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-lg-6">
            <div className="glass-card fade-in text-center">
              <div className="service-icon mb-4">
                <FaBullseye size={40} />
              </div>
              <h3 style={{ color: "var(--primary-blue)" }}>Our Mission</h3>
              <p>
                To accelerate the world&apos;s transition to sustainable energy by
                providing innovative, reliable, and cost-effective solar
                solutions that empower communities and protect the environment.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="glass-card fade-in text-center">
              <div className="service-icon mb-4">
                <FaEye size={40} />
              </div>
              <h3 style={{ color: "var(--eco-green)" }}>Our Vision</h3>
              <p>
                To create a world powered entirely by clean, renewable energy
                where every home and business can harness the power of the sun
                for a sustainable future.
              </p>
            </div>
          </div>
        </div>

        <div className="row mb-5">
          {[
            { number: "5000+", label: "Happy Customers" },
            { number: "15MW+", label: "Solar Installed" },
            { number: "50+", label: "Cities Served" },
            { number: "7", label: "Years Experience" },
          ].map((stat, index) => (
            <div className="col-lg-3 col-md-6 mb-4" key={index}>
              <div className="stats-card fade-in">
                <div className="stats-number">{stat.number}</div>
                <h5>{stat.label}</h5>
              </div>
            </div>
          ))}
        </div>

        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 style={{ color: "var(--primary-blue)" }}>Meet Our Team</h2>
            <p className="text-muted">The experts behind our solar solutions</p>
          </div>
        </div>

        <div className="row">
          {[
            {
              name: "John Smith",
              role: "CEO & Founder",
              desc: "15+ years in renewable energy with a passion for sustainable innovation.",
            },
            {
              name: "Sarah Johnson",
              role: "Head of Engineering",
              desc: "Expert in solar technology design and implementation with 12+ years experience.",
            },
            {
              name: "Mike Chen",
              role: "Operations Director",
              desc: "Ensures seamless project execution and customer satisfaction across all operations.",
            },
          ].map((member, index) => (
            <div className="col-lg-4 col-md-6 mb-4" key={index}>
              <div className="team-card fade-in">
                <div className="team-photo">
                  <FaUser size={50} />
                </div>
                <div className="team-info">
                  <h5>{member.name}</h5>
                  <p className="text-muted">{member.role}</p>
                  <p>{member.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
