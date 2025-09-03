'use client'
import React, { useState } from 'react'

export default function Contact() {
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!message.trim()) {
      setStatus('Please enter a message')
      return
    }

    setIsLoading(true)
    setStatus('Sending...')

    try {
      const res = await fetch('/api/sendcontact', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: message.trim() }),
      })

      // Check if response is ok
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`)
      }

      // Check if response is JSON
      const contentType = res.headers.get('content-type')
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error('Response is not JSON')
      }

      const data = await res.json()

      if (res.status === 200) {
        setStatus('Message sent successfully!')
        setMessage('')
      } else {
        setStatus(`Failed: ${data.error || 'Unknown error'}`)
      }
    } catch (error) {
      console.error('Error:', error)
      if (error.message.includes('405')) {
        setStatus('API route not found. Check your file structure.')
      } else if (error.message.includes('JSON')) {
        setStatus('Server error. Check console for details.')
      } else {
        setStatus('Failed to send message. Please try again.')
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">Get In Touch</h2>
        <div className="row">
          <div className="col-lg-6" data-aos="fade-right">
            <div className="contact-info">
              <h4 className="mb-4">Contact Information</h4>
              <div className="contact-item mb-3">
                <i className="fas fa-map-marker-alt text-primary me-3"></i>
                <span>Anakaputhur, Chennai, Tamil Nadu, India</span>
              </div>
              <div className="contact-item mb-3">
                <i className="fas fa-phone text-primary me-3"></i>
                <span>+91 9750402731</span>
              </div>
              <div className="contact-item mb-3">
                <i className="fas fa-envelope text-primary me-3"></i>
                <span>universalsolarpower2020@gmail.com</span>
              </div>
              <div className="contact-item mb-4">
                <i className="fas fa-clock text-primary me-3"></i>
                <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
              </div>
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5815307159947!2d80.12294!3d12.936715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525e7c4f3dbbf3%3A0x93d7e1e7c0a9e0e3!2sAnakaputhur%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1635936000000!5m2!1sen!2sin"
                  width="100%"
                  height="200"
                  style={{ border: 0, borderRadius: '10px' }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-left">
            <div className="contact-form">
              <h4 className="mb-4">Send Us a Message</h4>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    rows="5"
                    placeholder="Your Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    disabled={isLoading}
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="btn btn-submit w-100"
                  disabled={isLoading}
                >
                  {isLoading ? 'Sending...' : 'Send Message'}
                </button>
                {status && (
                  <div className={`mt-3 alert ${status.includes('success') ? 'alert-success' : 'alert-danger'}`}>
                    {status}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}