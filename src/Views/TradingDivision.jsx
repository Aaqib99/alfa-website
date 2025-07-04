import React, { useEffect } from "react";
import marineImage from "../Assets/Images/trading2a.png";
import backgroundImage from "../Assets/Images/main3a.png";
import SectionWrapperReverse from "../Components/SectionWrapperReverse";
import { motion } from "framer-motion";
const cardAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};
const TradingDivision = () => {
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
              <h1 className="text-5xl font-bold">Trading Division</h1>
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
                Trading Division
              </h1>
              <div className="space-y-4 ml-6 text-sm leading-relaxed text-justify">
                <p>
                  <span className="font-bold">ALFA Trading Division</span> is a
                  leading supplier serving the Marine, Offshore, Defense, Oil &
                  Gas, and Industrial sectors. We provide a full range of
                  high-quality products and technical materials that meet
                  international standards.
                </p>
              </div>

              {/* Core Services */}
              <div className="mt-6 ml-6">
                <h3 className="font-semibold text-white mb-2">
                  Our Range of Products and Supplies
                </h3>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <ul className="relative pl-5 mt-4 mb-4 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-red-500">
                    Electrical Equipment and Materials
                  </ul>
                  <li>Power Equipment</li>
                  <li>Switchgear & Circuit Protection</li>
                  <li>Electrical Accessories</li>
                  <li>Lighting & Control</li>
                </ul>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <ul className="relative pl-5 mt-4 mb-4 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-red-500">
                    Mechanical Equipment
                  </ul>
                  <li>Valves & Fittings</li>
                  <li>Pumps and Motors</li>
                  <li>Tools & Accessories</li>
                </ul>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <ul className="relative pl-5 mt-4 mb-4 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-red-500">
                    Mechanical Equipment
                  </ul>
                  <li>Valves & Fittings</li>
                  <li>Pumps and Motors</li>
                  <li>Tools & Accessories</li>
                </ul>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <ul className="relative pl-5 mt-4 mb-4 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-red-500">
                    Process Measurement Instruments
                  </ul>
                  <li>Level, Flow Instrument</li>
                  <li>Temperature Measurement</li>
                  <li>Measurement Instruments</li>
                  <li>Calibration Equipment</li>
                </ul>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <ul className="relative pl-5 mt-4 mb-4 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-red-500">
                    IT and Office Equipment
                  </ul>
                  <li>Computers & Accessories</li>
                  <li>Networking & Security</li>
                  <li>Office Furniture and Stationery</li>
                </ul>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <ul className="relative pl-5 mt-4 mb-4 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-red-500">
                    General Industrial Supplies
                  </ul>
                  <li>Marine & Offshore Equipment</li>
                  <li>Safety Equipment</li>
                  <li>Deck Equipment and Supplies</li>
                  <li>Lifting & Rigging Equipment</li>
                  <li>Piping and Industrial Components</li>
                  <li>Laboratory Equipment</li>
                  <li>Kitchen & Wet Units</li>
                  <li>Uniforms & Liners</li>
                  <li>Marine and Safety Accessories</li>
                  <li>Storage and Warehousing racking</li>
                  <li>Emergency Response Equipment</li>
                  <li>Safety Signage and Labels</li>
                  <li>Labeling and Packing Materials</li>
                  <li>Packing and Processing Equipment</li>
                  <li>Cleaning Equipment</li>
                  <li>Fire Extinguishers & Suppression Systems</li>
                  <li>Gas Cylinder Replenishment and Recharge</li>
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

export default TradingDivision;
