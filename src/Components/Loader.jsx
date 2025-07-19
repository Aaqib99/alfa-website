// Components/Loader.jsx
import React from "react";
import AlfaLogo from "../Assets/Icons/blue-logo.svg";
import LoadingGIF from "../Assets/Loading_GIF/Alfa_Loading_Animation.mp4";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center">
      {/* <img src={AlfaLogo} alt="Alfa Logo" className="w-40 h-auto mb-6 animate-pulse" />
      <div className="w-12 h-12 border-4 border-[#2C95D2] border-t-transparent rounded-full animate-spin"></div> */}
      <video
        src={LoadingGIF}
        autoPlay
        loop
        muted
        playsInline
        className="w-32 h-32 mb-6"
        style={{ background: "none" }}
      />
    </div>
  );
};

export default Loader;
