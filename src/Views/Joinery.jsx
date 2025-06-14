import React, { useEffect } from "react";
import marineImage from "../Assets/Images/joinery2a.png";
import backgroundImage from "../Assets/Images/main7a.png";
import SectionWrapperReverse from "../Components/SectionWrapperReverse";
import { motion } from "framer-motion";
const cardAnimation = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};
const Joinery = () => {
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
              <h1 className="text-5xl font-bold">Joinery Division</h1>
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
                Joinery Division
              </h1>
              <div className="space-y-4 ml-6 text-sm leading-relaxed text-justify">
                <p>
                  The <span className="font-bold"> ALFA Joinery Division</span>{" "}
                  offers a wide range of high-quality, bespoke joinery solutions
                  for various sectors, including residential, commercial,
                  hospitality and industrial. We provide tailored interior
                  fit-outs, custom wood products, and specialized services that
                  combine craftsmanship, design, and precision to meet the
                  evolving demands of modern projects.
                </p>
              </div>

              {/* Core Services */}
              <div className="mt-6 ml-6">
                <h3 className="font-semibold text-white mb-2">
                  Our Core Services
                </h3>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Custom Joinery</li>
                  <li>Interior Fit-Outs</li>
                  <li>Wooden Fixtures & Fittings</li>
                  <li>Door & Window</li>
                  <li>Kitchen & Wardrobe Fitting</li>
                  <li>Carpentry & Woodwork</li>
                  <li>Repairs & Restoration</li>
                  <li>Flooring & Cladding</li>
                  <li>Architectural Joinery</li>
                  <li>Exhibition & Event Joinery</li>
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

export default Joinery;
