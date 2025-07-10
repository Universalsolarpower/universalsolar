'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg fixed-top modern-navbar"
    >
      <div className="container">
        <a className="navbar-brand fw-bold" href="#home">
          <Image src="/logo.png" width={80} height={80} alt='logo' />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-lg-4">
            {['Home', 'About', 'Service', 'Projects', 'Contact'].map((page) => (
              <li className="nav-item" key={page}>
                <Link href={`/${page.toLowerCase() === 'home' ? '' : page.toLowerCase()}`} className="nav-link modern-link">
                  {page}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
