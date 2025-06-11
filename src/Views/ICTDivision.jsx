import React, { useEffect } from "react";
import marineImage from "../Assets/Images/ict2a.png";
import backgroundImage from "../Assets/Images/main4a.png";
import SectionWrapperReverse from "../Components/SectionWrapperReverse";
import { motion } from "framer-motion";
const cardAnimation = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};
const ICTDivision = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <SectionWrapperReverse>
        <div
          className="bg-cover bg-center h-[90vh] flex items-center justify-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          {/* Overlay Content */}
          <div className="relative flex flex-col items-center justify-center h-full text-white">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <h1 className="text-5xl font-bold">ICT Division</h1>
            </motion.div>
          </div>
        </div>
      </SectionWrapperReverse>
      <div className="relative bg-[#20376D] text-white">
          {/* Text Section */}
          <motion.div
            variants={cardAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
        <div className="max-w-9xl mx-auto px-2 py-16 grid md:grid-cols-2 gap-6 items-start">
            <div>
              <h2 className="text-sm ml-6 font-semibold text-[#2C95D2] uppercase mb-2">
                What We Do
              </h2>
              <h1 className="text-2xl ml-6 sm:text-3xl font-bold uppercase mb-4">
                ICT Division
              </h1>
              <div className="space-y-4 ml-6 text-sm leading-relaxed text-justify">
                <p>
                  <span className="font-bold">ALFA</span> ICT Division as a
                  trusted technology partner, offers end-to-end ICT, Low Current
                  and Smart Building Solutions. We specialize in designing,
                  deploying, integrating, and maintaining advanced IT
                  infrastructure and intelligent systems to support critical
                  operations across industries, with a focus on international
                  standards, quality, and innovation.
                </p>
              </div>

              {/* Core Services */}
              <div className="mt-6 ml-6">
                <h3 className="font-semibold text-white mb-2">
                  Our Core Services
                </h3>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Structured Cabling & Data Center Infrastructure</li>
                  <li>Network Infrastructure & Wireless Solutions</li>
                  <li>Surveillance, Security & Access Control</li>
                  <li>Audio/Visual & Conferencing Solutions</li>
                  <li>Television & Media Distribution</li>
                  <li>Smart Building & Automation</li>
                  <li>QSR / Retail Systems</li>
                  <li>Fiber Optic Transmission Line Solutions</li>
                  <li>IT Asset Management</li>
                  <li>IT Infrastructure Relocation Solutions</li>
                  <li>IT Consultancy</li>
                  <li>Annual Maintenance Contracts (AMC)</li>
                </ul>
              </div>
            </div>
          

          {/* Image Section */}
          <div className="flex justify-center items-end mt-9">
            <img
              src={marineImage}
              alt="Marine & Offshore"
              className="max-w-full h-auto object-contain"
            />
          </div>
        </div>
        </motion.div>
      </div>
    </>
  );
};

export default ICTDivision;
