import React from 'react';
import Image from 'next/image';

export default function Gallery() {
  const images = [
    "/project1.jpeg",
    "/project2.jpeg",
    "/project3.jpeg",
    "/project4.jpeg",
    "/project5.jpeg",
    "/project6.jpeg",
    "/project7.jpeg",
    "/project8.jpeg",
    "/project9.jpeg",
  ];

  return (
    <section id="portfolio" className="py-5 bg-light">
      <div className="container">
        {/* Section Header */}
        <div className="row text-center mb-5">
          <div className="col-lg-8 mx-auto">
            <h2 className="fw-bold">Gallery</h2>
            <p className="text-muted">A showcase of our recent projects</p>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="row g-4">
          {images.map((src, index) => (
            <div className="col-md-4 col-sm-6" key={index}>
              <div className="portfolio-card position-relative">
                <Image
                  src={src}
                  alt={`Project ${index + 1}`}
                  width={0} 
                  height={0} 
                  sizes="100vw"
                  style={{ width: "100%", height: "220px", objectFit: "cover" }}
                  className="rounded shadow-sm"
                />
                <div className="overlay position-absolute top-0 start-0 w-100 h-100"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
