import React, { useState, useEffect } from 'react'
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";

function Header() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isHeaderActive, setIsHeaderActive] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(0);

  const toggleDropdown = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
      setIsHeaderActive(false);
    } else {
      setActiveIndex(index);
      setIsHeaderActive(true);
      setHoveredIndex(0); // reset hover for each tab
    }
  };

  const data = [
    {
      title: 'What We Do',
      items: ['Customer Stories', 'Events', 'Analyst Recognition', 'Global Studies'],
      content: [
        {
          title: 'Discover why customers choose Us',
          text: 'We are a digital transformation and technology partner of choice for industry-leading organizations worldwide.',
          button: 'Read our customer success stories.'
        },
        {
          title: 'Explore our events',
          text: 'Join our events and webinars to stay ahead with the latest insights and trends.',
          button: 'View upcoming events'
        },
        {
          title: 'Analyst recognition',
          text: 'See what industry analysts are saying about TrilokaTech.',
          button: 'Read analyst reports'
        },
        {
          title: 'Global Studies',
          text: 'Explore our global studies and see how we are impacting businesses worldwide.',
          button: 'Read studies'
        }
      ]
    },
    {
      title: 'Who We Are',
      items: ['Our Mission', 'Leadership', 'Diversity', 'Sustainability'],
      content: [
        {
          title: 'Our Mission',
          text: 'We aim to drive innovation and progress globally through technology.',
          button: 'Learn more'
        },
        {
          title: 'Leadership',
          text: 'Meet the people behind our company’s success.',
          button: 'Meet our leaders'
        },
        {
          title: 'Diversity',
          text: 'We embrace diversity and inclusion in every aspect.',
          button: 'Our approach'
        },
        {
          title: 'Sustainability',
          text: 'Building a sustainable future with responsibility.',
          button: 'See our efforts'
        }
      ]
    },
    {
      title: 'Internship & Support',
      items: ['Student Programs', 'Guides', 'Training', 'FAQ'],
      content: [
        {
          title: 'Student Programs',
          text: 'Kickstart your career with our tailored internships.',
          button: 'Apply now'
        },
        {
          title: 'Guides',
          text: 'Find everything you need to get started.',
          button: 'Explore guides'
        },
        {
          title: 'Training',
          text: 'Enhance your skills through expert-led training.',
          button: 'Start learning'
        },
        {
          title: 'FAQ',
          text: 'Have questions? We’ve got answers.',
          button: 'Read FAQs'
        }
      ]
    }
  ];

  useEffect(() => {
    if (activeIndex !== null) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [activeIndex]);

  return (
    <>
      <header className={`header ${isHeaderActive ? 'active' : ''}`}>
        <div className="header-left">
          <img src="images/logo.png" alt="Logo" className="logo" />
          <div className="brand-text">
            <div className="company-name">TrilokaTech</div>
            <div className="company-tagline">Innovating Simplicity</div>
          </div>
        </div>

        <nav className="nav-links">
          {['What We Do', 'Who We Are', 'Internship & Support', 'Careers'].map((label, index) => (
            <a
              href="#"
              key={index}
              onClick={() => toggleDropdown(index)}
              className="nav-link"
            >
              <span className={`link-text ${activeIndex === index ? 'active' : ''}`}>
                {label}
              </span>
              {label !== "Careers" &&
                <MdKeyboardArrowDown
                  size={18}
                  className={`arrow-icon ${activeIndex === index ? 'rotate' : ''}`}
                />
              }
            </a>
          ))}
        </nav>
        <div className="header-right">
          <a href="#" className="contact-us">Contact Us</a>
        </div>
      </header>

      {activeIndex !== null && activeIndex !== 3 && (
        <div className="sidebar-container">
          <div className="sidebar">
            {data[activeIndex]?.items.map((item, index) => (
              <div
                key={index}
                className={`sidebar-item ${hoveredIndex === index ? 'active' : ''}`}
                onMouseEnter={() => setHoveredIndex(index)}
              >
                <span>{item}</span>
                <MdKeyboardArrowRight className="arrow-icon" />
              </div>
            ))}
          </div>

          <div className="content-section">
            <h1>{data[activeIndex]?.content[hoveredIndex].title}</h1>
            <p>{data[activeIndex]?.content[hoveredIndex].text}</p>
            <button className="cta-button">{data[activeIndex]?.content[hoveredIndex].button}</button>
          </div>
        </div>
      )}
    </>
  )
}

export default Header;
