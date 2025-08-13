import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const items = [
  {
    title: "Sustainable Practices",
    description:
      "We are dedicated to sustainable design practices, aiming to minimize our environmental impact. By incorporating eco-friendly materials and processes, we create beautiful, functional solutions that meet the needs of today while being mindful of tomorrow. Our commitment to sustainability ensures that our designs contribute positively to the world around us.",
  },
  {
    title: "Innovative Solutions",
    description:
      "Our innovative solutions leverage the latest technologies to deliver unique experiences. We combine creativity with strategic thinking to solve complex problems and achieve measurable results.",
  },
  {
    title: "Client-Centric Approach",
    description:
      "We prioritize our clients' goals and ensure that every project aligns with their vision. Our approach guarantees satisfaction and long-term partnerships.",
  },
  {
    title: "Customer Satisfaction",
    description:
      "Delivering complete customer satisfaction is at the heart of everything we do. We listen, adapt, and ensure our solutions exceed expectations every time.",
  },
  {
    title: "24/7 Support",
    description:
      "Our dedicated support team is available 24/7 to assist with any queries or challenges, ensuring your business operations run smoothly without interruptions.",
  },
  {
    title: "Expert Team",
    description:
      "Our team consists of highly skilled professionals with expertise across design, development, and digital strategy, enabling us to deliver exceptional results.",
  },
  {
    title: "Timely Delivery",
    description:
      "We understand the importance of deadlines. Our structured approach ensures that every project is completed on time without compromising quality.",
  },
  {
    title: "Scalable Solutions",
    description:
      "We build solutions that grow with your business. Our designs and technologies are scalable, allowing you to expand seamlessly as your needs evolve.",
  },
  {
    title: "Transparent Communication",
    description:
      "We maintain clear and transparent communication with our clients throughout the project lifecycle, keeping you informed and involved at every stage.",
  },
];


export default function HomeWhyChooseUs() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevItem = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const nextItem = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

    useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
    }, 5000); 

    return () => clearInterval(interval); // clean up on unmount
  }, [items.length]);

  return (
    <div className="whyChooseContainer">
      {/* Left Section */}
      <div className="leftSection">
        <p className="smallTitle">Why Choose Us?</p>
        <h1>Transforming Ideas into Exceptional Experiences</h1>
        <p>
          At TrilokaTech, we don’t just design—we craft digital experiences that captivate, engage, and inspire.
          Our team blends creativity, innovation, and cutting-edge technology to deliver solutions that not only meet your business goals
          but also leave a lasting impression on your audience. With us, your vision becomes a powerful reality.
        </p>
      </div>


      {/* Right Section */}
      <div className="rightSection">
        <h2>{items[currentIndex].title}</h2>
        <p>{items[currentIndex].description}</p>
        <div className="navigation">
          <FaArrowLeft onClick={prevItem} className="arrow" />
          <span>
            {currentIndex + 1} / {items.length}
          </span>
          <FaArrowRight onClick={nextItem} className="arrow" />
        </div>
        <div className="largeNumber">{`0${currentIndex + 1}`}</div>
      </div>
    </div>
  );
}
