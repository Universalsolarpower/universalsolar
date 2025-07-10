import React from 'react';
import { 
  FaHome, FaBuilding, FaBatteryHalf, FaTools, FaChartLine, FaMobileAlt, FaCheck, FaPhone, FaDraftingCompass, FaHammer, FaCogs 
} from 'react-icons/fa';

const serviceList = [
  {
    icon: <FaHome size={40} />,
    color: 'var(--primary-blue)',
    title: 'Residential Solar',
    desc: 'Custom solar panel installations for homes, reducing electricity bills and carbon footprint with premium quality systems.',
    points: ['Free home assessment', 'Custom design & installation', '25-year warranty', 'Financing options available'],
  },
  {
    icon: <FaBuilding size={40} />,
    color: 'var(--eco-green)',
    title: 'Commercial Solar',
    desc: 'Large-scale solar solutions for businesses, warehouses, and industrial facilities to maximize energy savings and ROI.',
    points: ['Energy audit & consultation', 'Scalable systems', 'Tax incentive optimization', 'Ongoing maintenance'],
  },
  {
    icon: <FaBatteryHalf size={40} />,
    color: 'var(--solar-yellow)',
    title: 'Energy Storage',
    desc: 'Advanced battery storage systems to store excess solar energy for use during peak hours or power outages.',
    points: ['Backup power solutions', 'Peak shaving capabilities', 'Smart energy management', 'Grid independence'],
  },
  {
    icon: <FaTools size={40} />,
    color: 'var(--primary-blue)',
    title: 'Installation & Maintenance',
    desc: 'Professional installation services and ongoing maintenance to ensure optimal performance and longevity of your solar system.',
    points: ['Certified installers', 'Quality assurance', 'Regular inspections', 'Performance monitoring'],
  },
  {
    icon: <FaChartLine size={40} />,
    color: 'var(--eco-green)',
    title: 'Energy Consulting',
    desc: 'Expert consultation services to help you understand your energy needs and design the most efficient solar solution.',
    points: ['Energy usage analysis', 'ROI calculations', 'System optimization', 'Rebate assistance'],
  },
  {
    icon: <FaMobileAlt size={40} />,
    color: 'var(--solar-yellow)',
    title: 'Smart Monitoring',
    desc: "Advanced monitoring systems with mobile apps to track your solar system's performance and energy production in real-time.",
    points: ['Real-time monitoring', 'Mobile app access', 'Performance alerts', 'Historical data'],
  },
];

const processList = [
  { icon: <FaPhone size={30} />, title: '1. Consultation', desc: 'Free initial consultation to assess your energy needs and solar potential.' },
  { icon: <FaDraftingCompass size={30} />, title: '2. Design', desc: 'Custom system design tailored to your property and energy requirements.' },
  { icon: <FaHammer size={30} />, title: '3. Installation', desc: 'Professional installation by certified technicians with quality assurance.' },
  { icon: <FaCogs size={30} />, title: '4. Activation', desc: 'System activation and ongoing monitoring to ensure optimal performance.' },
];

export default function ServicePage() {
  return (
    <section id="services" className="page-content">
      <div className="page-header">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h1 className="fade-in">Our Solar Services</h1>
              <p className="fade-in">
                Comprehensive solar energy solutions tailored to meet your specific needs and budget.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container section-padding">
        <div className="row">
          {serviceList.map((service, index) => (
            <div className="col-lg-4 col-md-6 mb-4" key={index}>
              <div className="service-card fade-in">
                <div className="service-icon">{service.icon}</div>
                <h4 style={{ color: service.color }}>{service.title}</h4>
                <p>{service.desc}</p>
                <ul className="list-unstyled mt-3">
                  {service.points.map((point, i) => (
                    <li key={i}>
                      <FaCheck className="text-success" /> {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="row mt-5">
          <div className="col-12 text-center mb-5">
            <h2 style={{ color: 'var(--primary-blue)' }}>Our Process</h2>
            <p className="text-muted">Simple steps to solar energy independence</p>
          </div>
        </div>

        <div className="row">
          {processList.map((step, index) => (
            <div className="col-lg-3 col-md-6 mb-4" key={index}>
              <div className="glass-card text-center fade-in">
                <div className="service-icon">{step.icon}</div>
                <h5>{step.title}</h5>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
