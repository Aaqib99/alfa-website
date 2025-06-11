import React, { useEffect } from "react";
import marineImage from "../Assets/Images/fabrication2a.png";
import backgroundImage from "../Assets/Images/main5a.png";
import SectionWrapperReverse from "../Components/SectionWrapperReverse";
import { motion } from "framer-motion";
const cardAnimation = {
hidden: { opacity: 0, y: 40 },
visible: { opacity: 1, y: 0 },
};
const FabricationDivision = () => {
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
                Fabrication & Machining Division
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
                Fabrication & Machining Division
              </h1>
              <div className="space-y-4 ml-6 text-sm leading-relaxed text-justify">
                <p>
                  <span className="font-bold">
                    ALFA’s Fabrication & Machining Division
                  </span>{" "}
                  offers comprehensive machining and fabrication services,
                  equipped with advanced machinery and a skilled workforce. Our
                  10,000 SQM facility is designed to handle large-scale
                  operations across various industries, with a focus on
                  delivering high-quality, efficient, and reliable production.
                  We provide a full range of services to meet your machining and
                  fabrication requirements, ensuring precision and quality in
                  every project.
                </p>
                <p>
                  All services are executed in-house within our fully equipped
                  facility, ensuring complete quality control and efficiency. We
                  specialize in meeting the complex needs of industries such as
                  oil & gas, petrochemical, marine, and construction.
                </p>
              </div>

              {/* Core Services */}
              <div className="mt-6 ml-6">
                <h3 className="font-semibold text-white mb-2">
                  Our Core Services
                </h3>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>
                    <span className="font-bold">Fabrication : </span>Steel
                    structures, custom metal components.
                  </li>
                  <li>
                    <span className="font-bold">Welding : </span>MIG, TIG, Stick
                    Welding, custom solutions for high-strength joints
                  </li>
                  <li>
                    <span className="font-bold">Machining : </span>CNC Cutting,
                    Steel Bending, Milling & Drilling, Laser & Plasma Cutting,
                    Turning (Turret Lathe), Line Boring, Broaching, Surface &
                    Blanchard Grinding.
                  </li>
                  <li>
                    <span className="font-bold">
                      Replacement & Spare Parts:
                    </span>
                    Shafts, Rollers, Bearings, Trunnions, Housings, Custom Parts
                  </li>
                  <li>
                    <span className="font-bold">Blasting and Painting : </span>
                    Surface preparation, epoxy coatings, corrosion-resistant
                    coatings
                  </li>
                  <li>
                    <span className="font-bold">Hydraulic Repair : </span>Mobile
                    and industrial services, troubleshooting, repair, and
                    maintenance
                  </li>
                  <li>
                    <span className="font-bold">Inspection Services : </span>
                    Welding Inspection (VT, PT, MT, UT, RT, MPI), Material
                    Testing, Dimensional Inspection, Surface Roughness Testing,
                    Non-Destructive Testing (NDT)
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

export default FabricationDivision;
