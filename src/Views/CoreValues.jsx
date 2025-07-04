import React, { useEffect } from "react";
import CoreValuesComp from "../Components/CoreValuesComp";
import backgroundImage from "../Assets/Images/main-background.jpg";
import peopleSvg from "../Assets/Icons/peopleSvg.svg";
import accountabilitySvg from "../Assets/Icons/accountabilitySvg.svg";
import collborationSvg from "../Assets/Icons/collborationSvg.svg";
import trustSvg from "../Assets/Icons/trustSvg.svg";
import excellenceSvg from "../Assets/Icons/excellenceSvg.svg";
import partnershipSvg from "../Assets/Icons/partnershipSvg.svg";
import { motion } from "framer-motion";
import SectionWrapperReverse from "../Components/SectionWrapperReverse";

function CoreValues() {
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
              <h1 className="text-5xl font-bold">Our Core Values</h1>
            </motion.div>
          </div>
        </div>
      </SectionWrapperReverse>
      <motion.div
        className="md:w-2/2 mb-6 md:mb-0"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="flex justify-center py-12">
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <CoreValuesComp
              icon={peopleSvg}
              title="People"
              description="We take the safety and well-being of our people seriously and provide our people with growth opportunities and partners with them to unleash our collective potential."
            />
            <CoreValuesComp
              icon={accountabilitySvg}
              title="Accountability"
              description="We have the courage to take full responsibility for our actions at all levels and set clear targets, empowers our people, and holds them accountable."
            />
            <CoreValuesComp
              icon={collborationSvg}
              title="Collaboration"
              description="We works together to reflect the “Power of One” and create synergies and minimize organizational boundaries and works across them effectively."
            />
            <CoreValuesComp
              icon={trustSvg}
              title="Trust"
              description="It is the foundation of our relationships with our clients, our partners, our people, and our communities. We never compromises on our professional and ethical principles."
            />
            <CoreValuesComp
              icon={excellenceSvg}
              title="Excellence"
              description="We deliver value to our clients through rigorous planning and disciplined execution and hedge against complacency by reflecting critically on our business practices."
            />
            <CoreValuesComp
              icon={partnershipSvg}
              title="partnerships"
              description="The partnerships we have developed with colleagues, customers, and suppliers are essential to our success. We will continue to strengthen these relationships and build new partnerships to ensure our future."
            />
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default CoreValues;
