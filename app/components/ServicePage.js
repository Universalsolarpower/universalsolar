import React from 'react';
import { 
  FaDraftingCompass, FaMapMarkedAlt, FaBoxes, FaIndustry, FaHammer, FaCogs, 
  FaLaptop, FaChartLine, FaThermometerHalf, FaTools, FaCheck,FaPhone 
} from 'react-icons/fa';

const serviceList = [
  {
    icon: <FaDraftingCompass size={40} />,
    color: 'var(--primary-blue)',
    title: 'Engineering, Procurement & Construction (EPC)',
    desc: 'Complete EPC solutions from design to commissioning for solar plants.',
    points: [
      'Engineering design & Consulting Services',
      'Site Survey',
      'Material Procurement',
      'Supply of Equipment',
      'Civil Planning & Procurement',
      'Erection',
      'Commissioning'
    ],
  },
  {
    icon: <FaLaptop size={40} />,
    color: 'var(--eco-green)',
    title: 'Operation & Maintenance (O&M)',
    desc: 'Ensuring peak performance and longevity of your solar system through advanced O&M services.',
    points: [
      'Monitoring Performance',
      'Remote Monitoring (Smart O&M)',
      'Inverter Monitoring',
      'Data Logging',
      'Grid Connection Check',
      'Preventive & Corrective Maintenance',
      'Thermographic Inspections',
      'Performance Evaluation',
      'Safety Checks'
    ],
  },
  {
    icon: <FaTools size={40} />,
    color: 'var(--solar-yellow)',
    title: 'Re-engineering & Re-development',
    desc: 'Upgrade and optimize existing solar systems for improved performance and extended lifespan.',
    points: [
      'System Assessment',
      'Design Phase',
      'Implementation',
      'Testing & Commissioning',
      'Refurbishing services to improve monitoring & maintenance',
      'Optimization services to achieve desired performance',
      'Replacement of existing materials, design & engineering'
    ],
  },
];

const processList = [
  {
    icon: <FaPhone size={30} />,
    title: '1. Consultation',
    desc: 'We provide a free initial consultation to understand your solar system requirements and goals.',
  },
  {
    icon: <FaDraftingCompass size={30} />,
    title: '2. Design & Planning',
    desc: 'Our team creates detailed engineering designs and project plans tailored to your specific needs.',
  },
  {
    icon: <FaHammer size={30} />,
    title: '3. Execution',
    desc: 'Professional procurement, construction, and installation delivered with high quality standards.',
  },
  {
    icon: <FaCogs size={30} />,
    title: '4. Commissioning & Optimization',
    desc: 'We activate, monitor, and optimize system to ensure maximum performance.',
  },
];


export default function ServicePage() {
  return (
    <section id="services" className="page-content">
      <div className="page-header">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h1 className="fade-in">Our Services</h1>
              <p className="fade-in">
                Comprehensive solar solutions including EPC, O&M, and re-engineering services to maximize efficiency and lifespan of your solar system.
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
            <p className="text-muted">Step-by-step approach to ensure quality and efficiency</p>
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
