"use client";
import React, { useState } from "react";
import { FaPaperPlane, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    propertyType: "",
    budget: "",
    message: "",
    newsletter: false,
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/sendemail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus("Your message has been sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          service: "",
          propertyType: "",
          budget: "",
          message: "",
          newsletter: false,
        });
      } else {
        setStatus(`Failed to send: ${data.message || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("An error occurred while sending the email.");
    }
  };

  return (
    <section id="contact" className="page-content">
      {/* Header */}
      <div className="page-header">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h1 className="fade-in">Get In Touch</h1>
              <p className="fade-in">
                Ready to harness the power of the sun? Contact us today for a free consultation and quote.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="container section-padding">
        <div className="row">
          <div className="col-lg-8 mb-5">
            <div className="contact-form fade-in">
              <h3 className="mb-4" style={{ color: "var(--primary-blue)" }}>Send us a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">First Name</label>
                    <input type="text" name="firstName" className="form-control" required value={formData.firstName} onChange={handleChange} />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Last Name</label>
                    <input type="text" name="lastName" className="form-control" required value={formData.lastName} onChange={handleChange} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" name="email" className="form-control" required value={formData.email} onChange={handleChange} />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Phone Number</label>
                    <input type="tel" name="phone" className="form-control" value={formData.phone} onChange={handleChange} />
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Service Interest</label>
                  <select name="service" className="form-control" value={formData.service} onChange={handleChange}>
                    <option value="">Select a service</option>
                    <option value="residential">Residential Solar</option>
                    <option value="commercial">Commercial Solar</option>
                    <option value="storage">Energy Storage</option>
                    <option value="maintenance">Maintenance</option>
                    <option value="consulting">Energy Consulting</option>
                    <option value="monitoring">Smart Monitoring</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Property Type</label>
                  <select name="propertyType" className="form-control" value={formData.propertyType} onChange={handleChange}>
                    <option value="">Select property type</option>
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="industrial">Industrial</option>
                    <option value="agricultural">Agricultural</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Budget Range</label>
                  <select name="budget" className="form-control" value={formData.budget} onChange={handleChange}>
                    <option value="">Select budget range</option>
                    <option value="under-10k">Under ₹10,000</option>
                    <option value="10k-25k">₹10,000 - ₹25,000</option>
                    <option value="25k-50k">₹25,000 - ₹50,000</option>
                    <option value="50k-100k">₹50,000 - ₹100,000</option>
                    <option value="over-100k">Over ₹100,000</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea name="message" className="form-control" rows="5" value={formData.message} onChange={handleChange}></textarea>
                </div>
                <div className="mb-3 form-check">
                  <input type="checkbox" name="newsletter" className="form-check-input" checked={formData.newsletter} onChange={handleChange} />
                  <label className="form-check-label">Subscribe to our newsletter</label>
                </div>
                <button type="submit" className="btn btn-primary">
                  <FaPaperPlane className="me-2" /> Send Message
                </button>
                <p className="mt-3 text-muted">{status}</p>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-lg-4 mt-3">
            <div className="contact-info-card fade-in mb-4">
              <div className="contact-icon">
                <FaMapMarkerAlt size={24} />
              </div>
              <h5>Visit Our Office</h5>
              <p>123 Solar Street<br />Green Valley, CA 90210<br />United States</p>
            </div>
            <div className="contact-info-card fade-in mb-4">
              <div className="contact-icon">
                <FaPhone size={24} />
              </div>
              <h5>Call Us</h5>
              <p>Main: (555) 123-4567<br />Emergency: (555) 987-6543<br />Toll-Free: 1-800-SOLAR-US</p>
            </div>
            <div className="contact-info-card fade-in mb-4">
              <div className="contact-icon">
                <FaEnvelope size={24} />
              </div>
              <h5>Email Us</h5>
              <p>info@universalsolar.com<br />sales@universalsolar.com<br />support@universalsolar.com</p>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="glass-card fade-in">
              <h3 className="mb-4 text-center" style={{ color: "var(--primary-blue)" }}>Find Us</h3>
              <div style={{
                height: "400px",
                background: "linear-gradient(135deg, #e9ecef 0%, #f8f9fa 100%)",
                borderRadius: "15px",
                overflow: "hidden",
                border: "2px dashed var(--primary-blue)",
              }}>
                <iframe
                  title="Our Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!2d3888.5815307159947!2d80.12294!3d12.936715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525e7c4f3dbbf3%3A0x93d7e1e7c0a9e0e3!2sAnakaputhur%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1635936000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="row mt-5">
          <div className="col-12 text-center mb-5">
            <h2 style={{ color: "var(--primary-blue)" }}>Frequently Asked Questions</h2>
            <p className="text-muted">Common questions about solar energy and our services</p>
          </div>

          <div className="col-lg-6">
            <div className="glass-card fade-in">
              <h5 style={{ color: "var(--eco-green)" }}>How much can I save with solar?</h5>
              <p>Most customers save 50-90% on their electricity bills, with typical payback periods of 6-10 years.</p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="glass-card fade-in">
              <h5 style={{ color: "var(--eco-green)" }}>What financing options are available?</h5>
              <p>We offer loans, leases, PPAs, and help with federal and state incentives.</p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="glass-card fade-in">
              <h5 style={{ color: "var(--eco-green)" }}>How long does installation take?</h5>
              <p>Residential installs: 1-3 days. Commercial: 1-4 weeks depending on complexity.</p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="glass-card fade-in">
              <h5 style={{ color: "var(--eco-green)" }}>What warranty do you provide?</h5>
              <p>25-year warranty on panels, 10-year on inverters, and workmanship guarantee.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
