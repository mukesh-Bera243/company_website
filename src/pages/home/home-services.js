import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const services = [
  {
    title: "Website Development",
    description: "Modern, responsive, and SEO-friendly websites.",
    detailDescription: "Modern, responsive, and SEO-friendly websites built for performance, security, and scalability. Tailored designs to suit your brand identity.",
    img: "images/home_01.png"
  },
  {
    title: "Software Products",
    description: "Custom-built products to fit your business needs.",
    detailDescription: "High-quality software solutions designed specifically for your business goals, ensuring efficiency, usability, and seamless integration.",
    img: "images/home_02.png"
  },
  {
    title: "Healthcare Solutions",
    description: "Innovative tech for the healthcare industry.",
    detailDescription: "Technology-driven solutions to improve healthcare efficiency, enhance patient care, and streamline operations for medical facilities.",
    img: "images/home_03.png"
  },
  {
    title: "Internships & Training",
    description: "Learn with hands-on experience from experts.",
    detailDescription: "Practical training programs with real-world projects to boost your career in tech, guided by industry experts.",
    img: "images/home_04.png"
  },
  {
    title: "Digital Marketing",
    description: "Boost your reach with targeted marketing strategies.",
    detailDescription: "Effective digital marketing campaigns that drive engagement, increase brand visibility, and generate qualified leads.",
    img: "images/home_02.png"
  },
  {
    title: "Cloud Services",
    description: "Secure, scalable, and cost-efficient cloud solutions.",
    detailDescription: "Cloud infrastructure management with top security, performance optimization, and cost efficiency in mind.",
    img: "images/home_03.png"
  }
];

function HomeServices() {
  const [startIndex, setStartIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const visibleCount = 3;

  const handlePrev = () => setStartIndex((prev) => Math.max(prev - 1, 0));
  const handleNext = () => setStartIndex((prev) => Math.min(prev + 1, services.length - visibleCount));

  return (
    <section className="servicesSection">
      <div className="container">
        <div className="servicesHeader">
          <h2 className="sectionTitle">Our Services</h2>
          <div className="arrows">
            <button
              className={`arrowIcon ${startIndex === 0 ? "disabled" : ""}`}
              onClick={handlePrev}
              disabled={startIndex === 0}
            >
              <FaArrowLeft size={16} />
            </button>
            <button
              className={`arrowIcon ${startIndex >= services.length - visibleCount ? "disabled" : ""}`}
              onClick={handleNext}
              disabled={startIndex >= services.length - visibleCount}
            >
              <FaArrowRight size={16} />
            </button>
          </div>
        </div>

        <div className="servicesWrapper">
          <div
            className="servicesSlider"
            style={{
              transform: `translateX(-${startIndex * (100 / visibleCount)}%)`,
            }}
          >
            {services.map((service, index) => (
              <div
                className="serviceCard"
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="serviceCard">
                  <div
                    className="cardImage"
                    style={{ backgroundImage: `url(${service.img})` }}
                  ></div>

                  <div className="overlay">
                    <h3>{service.title}</h3>
                    <p>
                      {hoveredIndex === index
                        ? service.detailDescription
                        : service.description}
                    </p>

                    {hoveredIndex === index && (
                      <button className="readMoreBtn">
                        Read More <FaArrowRight />
                      </button>
                    )}
                  </div>

                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeServices;
