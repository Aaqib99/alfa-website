import React from "react";
import "../BoardMembers.css"; // external CSS for better clarity
import normalImage from "../Assets/Images/normalImage.png"
import hoverImage from "../Assets/Images/hoverImage.png"

const members = [
  {
    name: "Waleed Al-Mulhim",
    role: "Board Member",
    image: normalImage,
    hoverImage: hoverImage,
  },
  {
    name: "Waleed Al-Mulhim",
    role: "Board Member",
    image: normalImage,
    hoverImage: hoverImage,
  },
  {
    name: "Waleed Al-Mulhim",
    role: "Board Member",
    image: normalImage,
    hoverImage: hoverImage,
  },
  {
    name: "Waleed Al-Mulhim",
    role: "Board Member",
    image: normalImage,
    hoverImage: hoverImage,
  },
  {
    name: "Waleed Al-Mulhim",
    role: "Board Member",
    image: normalImage,
    hoverImage: hoverImage,
  },
  {
    name: "Waleed Al-Mulhim",
    role: "Board Member",
    image: normalImage,
    hoverImage: hoverImage,
  },
];


const BoardMembers = () => {
  return (
    <div className="grid-container">
      {members.map((member, index) => (
        <div className="card" key={index}>
          <img src={member.image} alt={member.name} className="card-img" />
          <div className="hover-overlay">
            <img src={member.hoverImage} alt={`${member.name} hover`} />
            <div className="card-text">
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BoardMembers;
