import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const highlights = [
    {
        img: "images/home_01.png",
        title: "Empowering Businesses",
        text: "We deliver smart, scalable solutions to help your business grow faster and smarter.",
        button: "Read more"
    },
    {
        img: "images/home_02.png",
        title: "Innovation at Core",
        text: "Driving the future with cutting-edge technology and creative thinking.",
        button: "Learn more"
    },
    {
        img: "images/home_03.png",
        title: "Sustainable Tech",
        text: "Building responsible technology solutions for a better tomorrow.",
        button: "See our work"
    },
    {
        img: "images/home_04.png",
        title: "Global Excellence",
        text: "Recognized for delivering reliable, high-quality IT services worldwide.",
        button: "Discover more"
    }
];

function HeroSection () {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % highlights.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + highlights.length) % highlights.length);
    };


    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % highlights.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="slider">
            <div
                className="slides"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {highlights.map((item, index) => (
                    <div className="slide" key={index}>
                        <div
                            className={`card ${hoveredIndex === index ? "hovered" : ""}`}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <img src={item.img} alt={item.title} />
                            <div className="card-content">
                                <h2>{item.title}</h2>
                                <p>{item.text}</p>
                                <button>{item.button}</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation */}
            <div className="controls">
                <button onClick={prevSlide}><FaArrowLeft size={16} /></button>
                <button onClick={nextSlide}><FaArrowRight size={16} /></button>
            </div>
        </div>
    );
}

export default HeroSection
    ;
