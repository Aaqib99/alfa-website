import React, { useEffect } from "react";
import marineImage from "../Assets/Images/facility2a.png";
import backgroundImage from "../Assets/Images/main6a.png";
import SectionWrapperReverse from "../Components/SectionWrapperReverse";
import { motion } from "framer-motion";
const cardAnimation = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};
const FacilityManagement = () => {
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
              <h1 className="text-5xl font-bold">
                Facility Management Division
              </h1>
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
                Facility Management Division
              </h1>
              <div className="space-y-4 ml-6 text-sm leading-relaxed text-justify">
                <p>
                  <span className="font-bold">ALFA's</span> Facility Management
                  Division ensures smooth operation and maintenance of buildings
                  and industrial sites, with a customer-focused approach to
                  meeting business goals. Our services include HVAC, electrical,
                  plumbing maintenance, energy and waste management, janitorial
                  services, landscaping, and catering, all designed for safety,
                  efficiency and sustainability.
                </p>
              </div>

              {/* Core Services */}
              <div className="mt-6 ml-6">
                <h3 className="font-semibold text-white mb-2">
                  Our Core Services
                </h3>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <ul className="relative pl-5 mt-4 mb-4 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-red-500">
                    Technical Operations & Maintenance
                  </ul>
                  <p>
                    We offer Proactive and Reactive maintenance for HVAC and MEP
                    systems:
                  </p>
                  <li>
                    <span className="font-bold">Proactive maintenance:</span>{" "}
                    Preventive, Predictive, Condition-Based, Scheduled, Planned,
                    and Routine maintenance.
                  </li>
                  <li>
                    <span className="font-bold">Reactive Maintenance:</span>{" "}
                    Emergency and Corrective repairs.
                  </li>
                </ul>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <ul className="relative pl-5 mt-4 mb-4 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-red-500">
                    Office & Mover Services
                  </ul>
                  <li>
                    <span className="font-bold">
                      Space Planning & Move Management:
                    </span>{" "}
                    Office setup, relocation, and reorganization.
                  </li>
                  <li>
                    <span className="font-bold">Office Relocation:</span>{" "}
                    Packing, transport, and reinstallation of office equipment.
                    Internal Moves: Departmental and workstation reorganization.
                  </li>
                  <li>
                    <span className="font-bold">Internal Moves:</span>{" "}
                    Departmental and workstation reorganization.
                  </li>
                  <li>
                    <span className="font-bold">
                      Furniture Disassembly & Assembly:
                    </span>{" "}
                    Professional handling during moves.
                  </li>
                  <li>
                    <span className="font-bold">Storage Solutions: </span>{" "}
                    Secure short- and long-term storage.
                  </li>
                </ul>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <ul className="relative pl-5 mt-4 mb-4 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-red-500">
                    Soft Services
                  </ul>
                  <li>
                    <span className="font-bold">Janitorial Services:</span>{" "}
                    Regular cleaning of hygienic spaces.
                  </li>
                  <li>
                    <span className="font-bold">Landscaping: </span> Facility
                    aesthetics maintenance.
                  </li>
                  <li>
                    <span className="font-bold">Waste Management:</span>{" "}
                    Sustainable disposal and recycling.
                  </li>
                  <li>
                    <span className="font-bold">Bio-Clean Services:</span>{" "}
                    Specialized cleaning for sensitive environments.
                  </li>
                </ul>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <ul className="relative pl-5 mt-4 mb-4 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-red-500">
                    Catering Services
                  </ul>
                  <li>
                    Professional catering for corporate events and daily office
                    meals, enhancing workplace satisfaction
                  </li>
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

export default FacilityManagement;
