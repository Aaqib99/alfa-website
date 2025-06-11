import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Import all your background images
import bg1 from "../Assets/Images/main-background.jpg";
import bg2 from "../Assets/Images/main2.png";
import bg3 from "../Assets/Images/main4a.png";
import bg4 from "../Assets/Images/main2a.png";
import bg5 from "../Assets/Images/main3a.png";
import bg6 from "../Assets/Images/main3.jpg";

const HeroSection = () => {
  const images = [bg1, bg4, bg3, bg2, bg5, bg6];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-switch images every 1 second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div
      id="home"
      className="relative bg-cover bg-center h-[110vh] transition-all duration-500"
      style={{ backgroundImage: `url(${images[currentIndex]})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-40 z-0"></div>

      {/* Content */}
      <div className="absolute inset-0 z-10 flex items-center justify-start">
        <div className="text-left px-4 md:px-18 max-w-3xl mt-2">
          <h1
            className="font-poppins text-2xl md:text-4xl font-bold"
            // className="text-2xl md:text-4xl font-bold"
            style={{ color: "#E7E7E7" }}
          >
            WHERE SUSTAINABILITY & EXCELLENCE CONVERGE
          </h1>

          <a
            href="readmoreaboutcompany"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center gap-2 mt-10 px-6 py-3 rounded-full text-lg font-bold shadow-lg
    text-white bg-[#2196F3] transition-all duration-500 cursor-pointer group overflow-hidden"
          >
            <span className="relative px-4 z-10 group-hover:text-[#2196F3] transition duration-500">
              About Us
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 relative z-10 group-hover:text-[#2196F3] transition duration-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
            <span className="absolute inset-0 bg-[#20376D] transition-all duration-500 transform -translate-x-full group-hover:translate-x-0 z-0"></span>
          </a>
        </div>
      </div>
      {/* Circles (Indicators) with Mouse Shape */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-3">
        {/* Mouse shape with animated dot */}
        <div className="hidden sm:flex w-6 h-10 border-2 border-white rounded-full flex items-start justify-center relative overflow-hidden">
          <div className="w-2 h-2 bg-[#2C95D2] rounded-full animate-scroll-dot mt-1"></div>
        </div>

        {/* Dots */}
        <div className="flex gap-2">
          {images.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index ? "bg-white" : "bg-gray-400"
              }`}
            ></span>
          ))}
        </div>
      </div>
      {/* Navigation Arrows */}
      <div className="absolute hidden md:block top-1/2 left-3 transform -translate-y-1/2 z-20 group">
        <button
          onClick={() =>
            setCurrentIndex((prevIndex) =>
              prevIndex === 0 ? images.length - 1 : prevIndex - 1
            )
          }
          className="focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            className="w-9 h-9 cursor-pointer text-white hover:text-[#2C95D2] transition duration-300 animate-wiggle"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      </div>
      <div className="absolute hidden md:block top-1/2 right-3 transform -translate-y-1/2 z-20 group">
        <button
          onClick={() =>
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
          }
          // className="focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            className="w-9 h-9 cursor-pointer text-white hover:text-[#2C95D2] transition duration-300 animate-wiggle hover:animate-stop"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
