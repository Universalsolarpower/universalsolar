'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Service', href: '/service' },
    { name: 'Projects', href: '#' },
    { name: 'Contact', href: '/contact' },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          {/* Logo */}
          <Link href="/" className="nav-logo" onClick={closeMenu}>
            <Image 
              src="/logo.png" 
              width={85} 
              height={70} 
              alt="logo" 
              className="logo-image"
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className="nav-menu">
            {navItems.map((item) => (
              <li className="nav-item" key={item.name}>
                <Link href={item.href} className="nav-link">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <div className={`nav-toggle ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`nav-menu-mobile ${isOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <Link 
              key={item.name}
              href={item.href} 
              className="nav-link-mobile"
              onClick={closeMenu}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* Backdrop for mobile menu */}
      {isOpen && <div className="nav-backdrop" onClick={closeMenu}></div>}

      <style jsx>{`
        .navbar {
          position: fixed;
          border-radius:0 0 30px 30px;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .navbar.scrolled {
          background: rgba(255, 255, 255, 0.98);
          box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
        }

        .nav-container {
          padding: 0 60px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 70px;
          width: 100%;
        }

        .nav-logo {
          display: flex;
          align-items: center;
          text-decoration: none;
          z-index: 1001;
        }

        .logo-image {
          transition: transform 0.3s ease;
        }

        .nav-logo:hover .logo-image {
          transform: scale(1.05);
        }

        .nav-menu {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
          gap: 3rem;
        }

        .nav-item {
          position: relative;
        }

        .nav-link {
          text-decoration: none;
          color: #333;
          font-weight: 500;
          font-size: 1rem;
          padding: 0.5rem 0;
          position: relative;
          transition: color 0.3s ease;
        }

        .nav-link:hover {
          color: #007bff;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: #007bff;
          transition: width 0.3s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .nav-toggle {
          display: none;
          flex-direction: column;
          cursor: pointer;
          z-index: 1001;
        }

        .bar {
          width: 25px;
          height: 3px;
          background: #333;
          margin: 3px 0;
          transition: 0.3s;
          border-radius: 2px;
        }

        .nav-toggle.active .bar:nth-child(1) {
          transform: rotate(-45deg) translate(-5px, 6px);
        }

        .nav-toggle.active .bar:nth-child(2) {
          opacity: 0;
        }

        .nav-toggle.active .bar:nth-child(3) {
          transform: rotate(45deg) translate(-5px, -6px);
        }

        .nav-menu-mobile {
          position: fixed;
          top: 70px;
          left: -100%;
          width: 100%;
          height: calc(100vh - 70px);
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(10px);
          display: flex;
          flex-direction: column;
          padding: 2rem;
          transition: left 0.3s ease;
          z-index: 999;
        }

        .nav-menu-mobile.active {
          left: 0;
        }

        .nav-link-mobile {
          text-decoration: none;
          color: #333;
          font-weight: 500;
          font-size: 1.2rem;
          padding: 1rem 0;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          transition: color 0.3s ease;
        }

        .nav-link-mobile:hover {
          color: #007bff;
        }

        .nav-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          z-index: 998;
        }

        /* Tablet Styles */
        @media screen and (max-width: 1024px) {
          .nav-container {
            padding: 0 15px;
          }

          .nav-menu {
            gap: 1.5rem;
          }

          .nav-link {
            font-size: 0.95rem;
          }
        }

        /* Mobile Styles */
        @media screen and (max-width: 768px) {
          .nav-container {
            height: 60px;
            padding: 0 15px;
          }

          .nav-menu {
            display: none;
          }

          .nav-toggle {
            display: flex;
          }

          .nav-menu-mobile {
            top: 60px;
            height: calc(100vh - 60px);
            padding: 1.5rem;
          }

          .logo-image {
            width: 40px;
            height: 40px;
          }
        }

        /* Small Mobile Styles */
        @media screen and (max-width: 480px) {
          .nav-container {
            padding: 0 10px;
          }

          .nav-menu-mobile {
            padding: 1rem;
          }

          .nav-link-mobile {
            font-size: 1.1rem;
            padding: 0.8rem 0;
            text-decoration: none;
            padding: 10px 0;
          }
        }

        /* Smooth transitions for better UX */
        * {
          box-sizing: border-box;
        }

        /* Prevent body scroll when mobile menu is open */
        body.menu-open {
          overflow: hidden;
        }
      `}</style>
    </>
  );
}
