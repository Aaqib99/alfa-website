import React, { useEffect } from "react";
import backgroundImage from "../Assets/Images/our-capabilities.jpeg";
import SectionWrapperReverse from "../Components/SectionWrapperReverse";
import { motion } from "framer-motion";
const cardAnimation = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};
const Capability = () => {
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
          {/* Black overlay */}
          <div className="absolute h-[110vh] inset-0 bg-black h-96 opacity-60 z-0"></div>
          {/* Overlay Content */}
          <div className="relative flex flex-col items-center justify-center h-full text-white">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <h1 className="text-5xl font-bold">Our Capabilities</h1>
            </motion.div>
          </div>
        </div>
      </SectionWrapperReverse>
      <motion.div
        variants={cardAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
      >
        <div className="max-w-4xl mx-auto px-6 py-10 text-[#20376D]">
          <p className="mb-6 text-justify text-sm sm:text-base">
            ALFA GROUP offers end-to-end capabilities across multiple sectors,
            allowing us to deliver tailored and comprehensive solutions under
            one roof. Our expertise spans:
          </p>

          <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base">
            <li>
              <strong>
                Engineering, Procurement, Fabrication & Construction (EPFC)
              </strong>
            </li>
            <li>
              <strong>Lump Sum Turnkey (LSTK) Project Execution</strong>
            </li>
            <li>
              <strong>Porta Cabin and Modular Building Solutions</strong>
            </li>
            <li>
              <strong>Marine & Offshore Technical Services</strong>
            </li>
            <li>
              <strong>Specialized Civil and MEP construction solutions</strong>
            </li>
            <li>
              <strong>Specialized Steel Fabrication and Machining</strong>
            </li>
            <li>
              <strong>Procurement, Trading & Industrial Supplies</strong>
            </li>
            <li>
              <strong>
                ICT & ELV Systems, Structured Cabling, and Smart Solutions
              </strong>
            </li>
            <li>
              <strong>Facility Management and Maintenance</strong>
            </li>
            <li>
              <strong>Joinery Works and Custom Fit-Outs</strong>
            </li>
            <li>
              <strong>Heavy Equipment Rental and Logistics Support</strong>
            </li>
          </ul>

          <p className="mt-6 text-justify text-sm sm:text-base">
            Our integrated approach, skilled workforce, modern systems, and
            quality focus allow us to serve a wide range of industries including
            Oil & Gas, Power, Marine, Construction, Industrial Plants,
            Infrastructure, and Commercial Sectors.
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default Capability;
