import React from 'react'

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <img src="images/logo.png" alt="Logo" className="logo" />
        <div className="brand-text">
          <div className="company-name">TrilokaTech</div>
          <div className="company-tagline">Innovating Simplicity</div>
        </div>
      </div>

      <nav className="nav-links">
        <a href="#">What We Do</a>
        <a href="#">Who We Are</a>
        <a href="#">Internship & Support</a>
        <a href="#">Careers</a>
      </nav>

      <div className="header-right">
        <a href="#" className="contact-us">Contact Us</a>
      </div>
    </header>

  )
}

export default Header