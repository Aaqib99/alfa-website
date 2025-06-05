import React from "react";
import ParallaxBG from "../Assets/Images/env-responsibility.png"; // Replace with your image

const ParallaxSection = () => {
  return (
    <div
      className="relative h-[100vh] bg-fixed bg-center bg-cover flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${ParallaxBG})` }}
    >
      <div className="bg-opacity-50 p-6 rounded-lg text-center max-w-2xl mx-4">
        <h2 className="text-4xl font-bold mb-4">Global Reach, Local Touch</h2>
        <p className="text-lg">
          From coastlines to continents, Alfa Marine delivers excellence across the globe.
          Our reach is vast, and our presence is impactful.
        </p>
      </div>
    </div>
  );
};

export default ParallaxSection;
