import React, { useRef, useState, useEffect } from "react";
import DivisionCard from "../Components/DivisionCard";
import Marine from "../Assets/Icons/Marine.svg";
import Construction from "../Assets/Icons/Construction.svg";
import Fabrication from "../Assets/Icons/Fabrication.svg";
import Trading from "../Assets/Icons/Trading.svg";
import ICT from "../Assets/Icons/ICT.svg";
import Facility from "../Assets/Icons/Facility.svg";
import Joinery from "../Assets/Icons/Joinery.svg";
import Marine2a from "../Assets/Images/marine2a.png";
import Construction2a from "../Assets/Images/construction2a.png";
import Fabrication2a from "../Assets/Images/fabrication2a.png";
import Trading2a from "../Assets/Images/trading2a.png";
import Ict2a from "../Assets/Images/ict2a.png";
import Facility2a from "../Assets/Images/facility2a.png";
import Joinery2a from "../Assets/Images/joinery2a.png";
import { motion } from "framer-motion";

// Original cards
const cards = [
  {
    icon: (
      <img
        src={Marine}
        alt="Marine Logo"
        className="h-12 w-auto filter invert brightness-10"
      />
    ),
    title: "Marine & Offshore Division",
    description:
      "Our Marine & Offshore Division specializes in providing comprehensive...",
    label: "MARINE",
    bgImage: Marine2a,
    path: "/marine-and-offshore-division",
  },
  {
    icon: (
      <img
        src={Construction}
        alt="Construction Logo"
        className="h-12 w-auto filter invert brightness-10"
      />
    ),
    title: "Construction Division",
    description:
      "The Construction Division handles a wide range of civil, structural...",
    label: "CONSTRUCTION",
    bgImage: Construction2a,
    path: "/construction-division",
  },
  {
    icon: (
      <img
        src={Fabrication}
        alt="Fabrication Logo"
        className="h-12 w-auto filter invert brightness-10"
      />
    ),
    title: "Fabrication & Machining Division",
    description:
      "Our Fabrication & Machining Division offers precision metalwork, including...",
    label: "FABRICATION",
    bgImage: Fabrication2a,
    path: "/fabrication-and-machining-division",
  },
  {
    icon: (
      <img
        src={Trading}
        alt="Trading Logo"
        className="h-12 w-auto filter invert brightness-10"
      />
    ),
    title: "Trading Division",
    description:
      "The Trading Division provides reliable sourcing and supply chain solutions...",
    label: "TRADING",
    bgImage: Trading2a,
    path: "/trading-division",
  },
  {
    icon: (
      <img
        src={ICT}
        alt="ICT Logo"
        className="h-12 w-auto filter invert brightness-10"
      />
    ),
    title: "ICT Division",
    description:
      "Our ICT Division delivers innovative technology solutions for enterprise needs. Services...",
    label: "ICT",
    bgImage: Ict2a,
    path: "/ict-division",
  },
  {
    icon: (
      <img
        src={Facility}
        alt="Facility Logo"
        className="h-12 w-auto filter invert brightness-10"
      />
    ),
    title: "Facility Management Division",
    description:
      "The Facility Management Division ensures the seamless operation...",
    label: "FACILITY MGMT",
    bgImage: Facility2a,
    path: "/facility-management-division",
  },
  {
    icon: (
      <img
        src={Joinery}
        alt="Joinery Logo"
        className="h-12 w-auto filter invert brightness-10"
      />
    ),
    title: "Joinery Division",
    description:
      "The Joinery Division specializes in custom woodwork, including doors...",
    label: "JOINERY",
    bgImage: Joinery2a,
    path: "/joinery-division",
  },
];

// Clone for infinite scroll
const loopedCards = [...cards.slice(-3), ...cards, ...cards.slice(0, 3)];

function OurDivisions() {
  const containerRef = useRef(null);
  const [centerIndex, setCenterIndex] = useState(3); // 3 is the start of real cards in looped list
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const startDrag = (e) => {
    isDragging.current = true;
    startX.current = e.pageX || e.touches[0].pageX;
    scrollLeft.current = containerRef.current.scrollLeft;
  };
  const scrollByAmount = () => containerRef.current.offsetWidth / 1;
 const scrollLeftFunc = () => {
    containerRef.current.scrollBy({ left: -scrollByAmount(), behavior: "smooth" });
  };

  const scrollRightFunc = () => {
    containerRef.current.scrollBy({ left: scrollByAmount(), behavior: "smooth" });
  };
  const endDrag = () => {
    isDragging.current = false;
  };

  const onDrag = (e) => {
    if (!isDragging.current) return;
    const x = e.pageX || e.touches[0].pageX;
    const walk = (x - startX.current) * 1.5;
    containerRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleScroll = () => {
    const container = containerRef.current;
    const scrollLeftVal = container.scrollLeft;
    const width = container.offsetWidth;
    const cardWidth = container.querySelector('div')?.offsetWidth || width / 3;
    const index = Math.round(scrollLeftVal / cardWidth);
    setCenterIndex(index);

    const totalCards = cards.length;
    if (index <= 2) {
      container.scrollLeft = cardWidth * (totalCards + index);
      setCenterIndex(totalCards + index);
    } else if (index >= totalCards + 3) {
      container.scrollLeft = cardWidth * (index - totalCards);
      setCenterIndex(index - totalCards);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    container.scrollLeft = (container.offsetWidth / 3) * 3;
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="mt-24 flex items-center justify-center">
        <div className="container mx-auto px-4 md:px-8 flex flex-col items-center justify-center">
          <motion.div
            className="md:w-2/2 mb-6 md:mb-0"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="md:w-full text-center">
              <h3
                className="text-3xl md:text-4xl font-bold mb-2"
                style={{ color: "#20376D" }}
              >
                ALFA Divisions
              </h3>
              <p className="text-lg text-gray-700" style={{ color: "#20376D" }}>
                Expert teams and robust systems drive each division to deliver
                projects that are timely, safe, and value-packed.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        variants={{
          hidden: { opacity: 0, x: 120 },
          visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
        }}
      >
        <div className="overflow-hidden sm:px-0 md:px-4 lg:px-6 mt-2">
          <div
            ref={containerRef}
            className="flex gap-6 sm:gap-2 md:gap-14 overflow-x-scroll no-scrollbar select-none sm:px-0 md:px-4 lg:px-6"
            onMouseDown={startDrag}
            onMouseLeave={endDrag}
            onMouseUp={endDrag}
            onMouseMove={onDrag}
            onTouchStart={startDrag}
            onTouchMove={onDrag}
            onTouchEnd={endDrag}
            style={{ cursor: "grab" }}
          >
            {loopedCards.map((card, index) => {
              const isCenter = index === centerIndex;
              return (
                <div
                  key={index}
                  className={`sm:w-1/2 md:w-2/3 lg:w-1/3 flex-shrink-0 transition-transform duration-300 ease-in-out ${
                    isCenter ? "scale-105" : "scale-95"
                  }`}
                >
                  <DivisionCard {...card} isCenter={isCenter} />
                </div>
              );
            })}
          </div>
          <div className="flex justify-center mt-4 gap-6 md:hidden">
            <button onClick={scrollLeftFunc} className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button onClick={scrollRightFunc} className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default OurDivisions;
