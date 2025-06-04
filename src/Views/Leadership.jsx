import React, { useEffect } from "react";
import profileImg from "../Assets/Images/ceo-image1.jpg";
import SustainbilityBG from "../Assets/Images/SustainbilityBG.png";
import BoardMembers from "../Components/BoardMembers";

const Leadership = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div
        className="bg-cover bg-center h-[110vh] flex items-center justify-center"
        style={{ backgroundImage: `url(${SustainbilityBG})` }}
      >
        <h1 className="text-5xl text-white font-bold mb-4">Our Leadership</h1>
      </div>
      <div className="py-24 px-24">
        <BoardMembers />
      </div>
    </>
  );
};

export default Leadership;
