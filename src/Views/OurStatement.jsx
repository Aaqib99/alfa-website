import React, { useEffect } from "react";
import SustainbilityBG from "../Assets/Images/SustainbilityBG.png";
import missionIcon from "../Assets/Icons/missionIcon.svg";
import visionIcon from "../Assets/Icons/visionIcon.svg";
import goalsIcon from "../Assets/Icons/goalsIcon.svg";
import SustainabilityComp from "../Components/SustainabilityComp";
import SectionWrapperReverse from "../Components/SectionWrapperReverse";
import { motion } from "framer-motion";
const cardAnimation = {
hidden: { opacity: 0, y: 40 },
visible: { opacity: 1, y: 0 },
};
const OurStatement = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const missionText =
    "To deliver innovative, high-quality, and sustainable solutions across multiple industries by providing integrated services through our specialized divisions. We are dedicated to exceeding client expectations through operational excellence, safety, integrity, and a commitment to continuous improvement.";
  const visionText =
    "To be a leading multi-division enterprise recognized globally for our reliability, innovation, and excellence—serving as the preferred one-stop solution provider across the Oil & Gas, Renewable Energy, Power & Utilities, Marine & Offshore, Defense, Petrochemical, Construction, Industrial, Commercial, and Entertainment sectors.";
  const goalsText =
    "Deliver high-quality solutions with global standards, build lasting relationships through tailored services that exceed customer expectations, promote sustainable growth with eco-friendly practices, advance through technology and expertise, and expand capabilities to reach new sectors and regions.";

  return (
    <>
      <SectionWrapperReverse>
        <div
          className="bg-cover bg-center h-[90vh] flex items-center justify-center"
          style={{ backgroundImage: `url(${SustainbilityBG})` }}
        >
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <h1 className="text-5xl text-white font-bold">Our Statement</h1>
          </motion.div>
        </div>
      </SectionWrapperReverse>
       <motion.div
                variants={cardAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              >
        <SustainabilityComp
          title="Mission"
          description={missionText}
          icon={missionIcon}
        />
      
      <SustainabilityComp
        title="Vision"
        description={visionText}
        icon={visionIcon}
      />
      <SustainabilityComp
        title="Goals"
        description={goalsText}
        icon={goalsIcon}
      />
      </motion.div>
    </>
  );
};

export default OurStatement;
