import React, { useEffect } from "react";
import HeroSection from "../Components/HeroSection";
import AboutUSComp from "../Components/AboutUSComp";
import ContactUs from "./ContactUs";
import CeoMessage from "../Components/CeoMessage";
import WhyChooseUs from "../Components/WhyChooseUs";
import AlfaAtGlance from "../Components/AlfaAtGlance";
import OurPresence from "../Components/OurPresence";
import OurClients from "../Components/OurClient";
import SectionWrapper from "../Components/SectionWrapper";
import OurDivisions from "./OurDivisions";
import ParallaxSection from "../Components/ParallexSection";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div id="home">
        <HeroSection />
      </div>
      <SectionWrapper id="ceomessage">
        <CeoMessage />
      </SectionWrapper>
      <SectionWrapper id="ourdivisions">
        <OurDivisions />
      </SectionWrapper>
      <SectionWrapper id="whychooseus">
        <WhyChooseUs />
      </SectionWrapper>
      <SectionWrapper id="alfaatglance">
        <AlfaAtGlance />
      </SectionWrapper>
      <SectionWrapper id="ourpresence">
        <OurPresence />
      </SectionWrapper>
      <SectionWrapper id="parallex">
        <div className="mt-8">
          <ParallaxSection />
        </div>
      </SectionWrapper>
      <SectionWrapper id="ourclients">
        <OurClients />
      </SectionWrapper>

      {/* <div id="contactus">
        <ContactUs />
      </div> */}
      {/* <ScrollToTopButton /> */}
      {/* <Counter/> */}
      {/* <PortfolioComp/> */}
      {/* <TestimonialComp/> */}
    </>
  );
};

export default Home;
